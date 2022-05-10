import { Grid } from "@mui/material"
import React from "react"
import CustomCard from "./components/card/card"

function App() {
  const zones = ["Flood Zone 1", "Flood Zone 2", "Flood Zone 3"]
  return (
    <Grid container direction="column">
      {zones.map((data) => {
        return <CustomCard data={data} />
      })}
    </Grid>
  )
}

export default App
