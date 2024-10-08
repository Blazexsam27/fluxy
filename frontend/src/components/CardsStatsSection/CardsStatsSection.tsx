// components/StatisticsSection.tsx
import React, { useEffect, useState, useCallback } from "react";
import Grid from "@mui/material/Grid2";
import StatisticsCard from "../Widgets/StatisticsCard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import CodeIcon from "@mui/icons-material/Code";

import analysisReportObject from "../../../../reports/eslint-report.json";
import utils from "../../utils/utils";

const StatisticsSection: React.FC = () => {
  // States
  const [errorCountObj, setErrorCountObj] = useState({
    errorCount: 0,
    fatalErrorCount: 0,
    fixableErrorCount: 0,
  });

  let errorCountValue =
    errorCountObj.errorCount +
    errorCountObj.fatalErrorCount +
    errorCountObj.fixableErrorCount;
  const statisticsData = [
    {
      title: "Error Count",
      value: errorCountValue,
      percentage: 12,
      description: "Error count in current codebase",
      icon: <CodeIcon />,
      iconBgColor: "#0be881",
    },
    {
      title: "Expenses",
      value: errorCountValue,
      percentage: 8.2,
      description: "Total expenses for the month",
      icon: <TrendingDownIcon />,
      iconBgColor: "#0be881",
    },
    {
      title: "Investment",
      value: errorCountValue,
      percentage: -6.3,
      description: "Net investment for the month",
      icon: <TrendingUpIcon />,
      iconBgColor: "#f53b57",
    },
    {
      title: "Net Profit",
      value: errorCountValue,
      percentage: 6.9,
      description: "Net profit for the month",
      icon: <TrendingUpIcon />,
      iconBgColor: "#0be881",
    },
    // Add more statistics as needed
  ];

  const getErrorCountObject = useCallback(() => {
    console.log(analysisReportObject);
    try {
      const errorCountObject = utils.getTotalErrors(analysisReportObject);
      setErrorCountObj(errorCountObject);
    } catch (error) {
      console.error("Error occured", error);
    }
  }, [analysisReportObject, errorCountObj]);

  useEffect(() => {
    getErrorCountObject();
  }, []);

  return (
    <Grid container spacing={4}>
      {statisticsData.map((stat, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <StatisticsCard
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
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
