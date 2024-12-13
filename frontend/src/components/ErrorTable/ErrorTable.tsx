import { useSelector } from "react-redux";
import CollapsibleTable from "../Widgets/CollapsibleTable";
import { ReportObject } from "../../types/report.types";
import { Container } from "@mui/material";

function ErrorTable() {
  const { errorObjectList }: { errorObjectList: ReportObject[] } = useSelector(
    (state: any) => state.report
  );

  return (
    <Container
      maxWidth={false}
      sx={{ height: "70vh", overflow: "auto", marginBlock: "2rem" }}
    >
      <CollapsibleTable dataList={errorObjectList} />;
    </Container>
  );
}

export default ErrorTable;
