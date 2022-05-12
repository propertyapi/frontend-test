import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import CardImage from "../CardMedia.png"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'

interface card {
  index: number,
  key: string
}

export default {
  title: "Material/Card",
  component: Card
}


export const CardComponent = ({index, key}: card) => (
  <Card key={key} sx={{ maxWidth: 229, borderRadius: "10px" }}>
    <CardMedia component="img" height="100" image={CardImage} alt="random" />
    <CardContent sx={{ pl: "18.25px", py: "4px" }} style={{ paddingBottom: 4 }}>
      <FormControlLabel control={<Checkbox defaultChecked={index === 2? true : false }/>} label="Flood Zone 3." />
    </CardContent>
  </Card>
)