import { Grid } from "@mui/material"
import React, { useState } from "react"
import CustomCard from "./components/card/card"

function App() {
  const zones = ["Flood Zone 1", "Flood Zone 2", "Flood Zone 3"]
  const [isHover, setHover] = useState<boolean>(false)
  const [isChecked, setChecked] = useState<boolean>(false)

  const hoverHandler=(x:boolean)=>{
    setHover(x)
  }
  return (
    <Grid container direction="column">
      {/* {zones.map((data) => { */}
         <CustomCard data="Flood Zone 1" isHover={isHover} hoverHandler={hoverHandler} isChecked={isChecked} setChecked={setChecked} />
      {/* })} */}
    </Grid>
  )
}

export default App
