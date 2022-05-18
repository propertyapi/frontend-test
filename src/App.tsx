import React from "react"
import logo from "./logo.svg"
import "./App.css"
import OutlinedCard from "./Components/card"
import { makeStyles } from "@mui/material";

function App() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh'}}>
        <OutlinedCard
        />
      </div>
    </>
  )
}

export default App
