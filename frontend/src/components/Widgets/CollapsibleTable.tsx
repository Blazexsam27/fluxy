import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ReportObject } from "../../types/report.types";

interface CollapsibleTableProps {
  dataList: ReportObject[];
}

function Row({ row }: { row: any }) {
  const [open, setOpen] = React.useState(false);

  const { line, message, severity } = row.messages;
  // const { filePath } = row;
  // const calculateTotal = (dataRow: any) => {
  //   try {
  //     let result = 0;
  //     return result;
  //   } catch (error) {
  //     console.error("Error while calculating total");
  //   }
  // };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {severity === 2 ? "Error" : "Warning"}
        </TableCell>
        <TableCell align="left">{row.filePath}</TableCell>
        <TableCell align="left">{line}</TableCell>
        <TableCell align="left">{message}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {filePath}
                    </TableCell>
                    <TableCell>{line}</TableCell>
                    <TableCell align="left">{line}</TableCell>
                    <TableCell align="left">{message}</TableCell>
                  </TableRow>
                </TableBody>
              </Table> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ dataList }: CollapsibleTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead sx={{ background: "#0B192C" }}>
          <TableRow>
            <TableCell />
            <TableCell sx={{ color: "#fff" }}>Type</TableCell>
            <TableCell align="left" sx={{ color: "#fff" }}>
              File Path
            </TableCell>
            <TableCell align="left" sx={{ color: "#fff" }}>
              Line Number
            </TableCell>
            <TableCell align="left" sx={{ color: "#fff" }}>
              Message
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((item, index) => (
            <Row key={index} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
