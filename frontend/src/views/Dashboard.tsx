import { Container, Box, Typography } from "@mui/material";
import CardsStatsSection from "../components/CardsStatsSection/CardsStatsSection";

function Dashboard() {
  return (
    <Box sx={{ mx: { xs: "1rem", md: "7.5rem" } }}>
      <Typography
        className="text-gray-600"
        align="center"
        variant="h5"
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
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard;
