import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

interface StatisticsCardProp {
  title: string;
  value: number | string;
  percentage: number;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}
interface IconBoxProps {
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
}
interface StatsPercentageProp {
  color?: string;
  children: React.ReactNode;
}

const StyledCard = styled(Card)({
  minWidth: 300,
  height: 150,
  position: "relative",
});

const IconBox = styled(Box)<IconBoxProps>(({ backgroundColor }) => ({
  position: "absolute",
  left: "1rem",
  top: "2rem",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: backgroundColor,
  width: 40,
  height: 40,
  borderRadius: "10px",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StatsPercentage = styled(Typography)<StatsPercentageProp>(
  ({ color }) => ({
    position: "absolute",
    left: "4rem",
    top: "1.5rem",
    fontSize: "14px",
    color: color,
  })
);

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingLeft: "4rem",
});

const StatisticsCard: React.FC<StatisticsCardProp> = ({
  title,
  value,
  percentage,
  description,
  icon,
  iconBgColor,
}) => {
  return (
    <StyledCard>
      <CardContent>
        {icon && <IconBox backgroundColor={iconBgColor}>{icon}</IconBox>}
        <StatsPercentage color={percentage > 0 ? "#0be881" : "#f53b57"}>
          {percentage}%
        </StatsPercentage>

        <ContentBox>
          <Typography variant="body1" component="div" fontWeight={"bold"}>
            {title}
          </Typography>
          <Typography variant="h4" color="textSecondary">
            {value}
          </Typography>

          <Box sx={{ border: "1px solid #f1f2f6", width: "90%" }} my={1}></Box>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </ContentBox>
      </CardContent>
    </StyledCard>
  );
};

export default StatisticsCard;
