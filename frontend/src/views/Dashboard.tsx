import { Container, Box, Typography } from "@mui/material";
import CardsStatsSection from "../components/CardsStatsSection/CardsStatsSection";
import ErrorTable from "../components/ErrorTable/ErrorTable";
import ChartsSection from "../components/ChartsSection/ChartsSection";
import CodebaseStats from "../components/CodebaseStats/CodebaseStats";

function Dashboard() {
  return (
    <Box sx={{ mx: { xs: "1rem", md: "7.5rem" } }}>
      <Typography
        className="text-gray-600"
        align="center"
        variant="h4"
        fontWeight={"bold"}
        mt={2}
        textTransform={"uppercase"}
      >
        Fluxy Dashboard
      </Typography>
      <Container maxWidth={false} disableGutters>
        <Box my={2}>
          <Typography variant="h4" gutterBottom>
            Statistics
          </Typography>
          <CardsStatsSection />

          {/* Codebase stats and info */}
          <Typography
            className="text-gray-600"
            align="center"
            variant="h5"
            fontWeight={"bold"}
            mt={4}
            textTransform={"uppercase"}
          >
            Codebase Information
          </Typography>
          <CodebaseStats />

          <ChartsSection />
          {/* Error Table */}
          <Typography
            className="text-gray-600"
            align="center"
            variant="h5"
            fontWeight={"bold"}
            mt={4}
            textTransform={"uppercase"}
          >
            Error Table
          </Typography>
          <ErrorTable />
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard;
