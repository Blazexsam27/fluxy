// components/StatisticsSection.tsx
import React, { useEffect, useState, useCallback } from "react";
import Grid from "@mui/material/Grid2";
import StatisticsCard from "../Widgets/StatisticsCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CodeIcon from "@mui/icons-material/Code";

import analysisReportObject from "../../../../reports/eslint-report.json";
import reportServices from "../../services/report.services";
import { setReportObjectList } from "../../features/report";
import { useDispatch } from "react-redux";

const StatisticsSection: React.FC = () => {
  const dispatch = useDispatch();
  // States
  const [errorCountObj, setErrorCountObj] = useState({
    errorCount: 0,
    fatalErrorCount: 0,
    fixableErrorCount: 0,
  });
  const [warningCountObj, setWarningCountObj] = useState({
    warningCount: 0,
    fixableWarningCount: 0,
  });

  let errorCountValue =
    errorCountObj.errorCount +
    errorCountObj.fatalErrorCount +
    errorCountObj.fixableErrorCount;

  let warningCountValue =
    warningCountObj.warningCount + warningCountObj.fixableWarningCount;
  const statisticsData = [
    {
      title: "Error Count",
      value: errorCountValue,
      percentage: 12,
      description: "Total error count in current codebase",
      icon: <CodeIcon />,
      iconBgColor: "#0be881",
    },
    {
      title: "Fatal Error Count",
      value: errorCountObj.fatalErrorCount,
      percentage: 8.2,
      description: "Total fatal errors count in current codebase",
      icon: <TrendingDownIcon />,
      iconBgColor: "#0be881",
    },
    {
      title: "Warning Count",
      value: warningCountObj.warningCount,
      percentage: -6.3,
      description: "Total warning count in current codebase",
      icon: <TrendingUpIcon />,
      iconBgColor: "#f53b57",
    },
    {
      title: "Fatal Warning Count",
      value: warningCountObj.fixableWarningCount,
      percentage: 6.9,
      description: "Total fixable warning count in current codebase",
      icon: <TrendingUpIcon />,
      iconBgColor: "#0be881",
    },
    // Add more statistics as needed
  ];

  const getFilteredAnalysisReport = useCallback(() => {
    console.log(analysisReportObject);
    try {
      const filteredAnalysisReport =
        reportServices.removeZeroErrorCountObjects(analysisReportObject);
      dispatch(setReportObjectList(filteredAnalysisReport));

      const errorCountObject = reportServices.getErrorCountObject(
        filteredAnalysisReport
      );
      const warningCountObject = reportServices.getWarningCountObject(
        filteredAnalysisReport
      );

      setErrorCountObj(errorCountObject);
      setWarningCountObj(warningCountObject);
    } catch (error) {
      console.error("Error occured", error);
    }
  }, [analysisReportObject, errorCountObj]);

  useEffect(() => {
    getFilteredAnalysisReport();
  }, []);

  return (
    <Grid container spacing={4}>
      {statisticsData.map((stat, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <StatisticsCard
            title={stat.title}
            value={errorCountValue}
            percentage={warningCountValue}
            description={stat.description}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsSection;
