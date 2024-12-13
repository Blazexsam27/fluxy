import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import codebaseServices from "../../services/codebase.services";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CodebaseStats() {
  return (
    <TableContainer component={Paper} sx={{ marginBlock: "2rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: "#0B192C" }}>
          <TableRow>
            <TableCell align="left" sx={{ color: "#fff" }}>
              Language
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Line Of Code
            </TableCell>
            <TableCell align="center" sx={{ color: "#fff" }}>
              Comments
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {codebaseServices.getCodebaseInfo().map((item: any) => (
            <TableRow
              key={item.toolName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{item.toolName}</TableCell>
              <TableCell align="center">{item.code}</TableCell>
              <TableCell align="center">{item.comment}</TableCell>
              <TableCell>
                <LinearProgressWithLabel
                  variant="determinate"
                  value={
                    (item.code / codebaseServices.getTotalLinesOfCode()) * 100
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
