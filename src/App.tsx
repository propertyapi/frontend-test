import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import MaterialCard from "./MaterialCard"

function App() {
  return (
    <Container maxWidth="xl" sx={{ height: "100vh", minHeight: "100vh" }}>
      <Grid direction="column" display="flex" justifyContent="center" alignItems="center" gap={3} sx={{ height: "100vh", minHeight: "100vh" }}>
        {Array.from(Array(3)).map((_, index) => (
          <MaterialCard index={index} key={`card_${index}`} label={`Flood Zone ${index}`} />
        ))}
      </Grid>
    </Container>
  )
}

export default App
