import React from "react"
import { Card } from "@mui/material"
import { CardActions } from "@mui/material"
import { CardContent } from "@mui/material"
import { Checkbox } from "@mui/material"
import { Typography } from "@mui/material"
import FloodChart from "../../assests/images/floods.jpg"
type Props = {
  data: string
}

const CustomCard = (props: Props) => {
  const { data } = props
  return (
    <Card
      sx={{
        borderRadius: "10px",
        margin: "20px auto",
        width: "250px",
        height: "180px",
        border: "2px solid transparent",
        "&:hover": {
          borderColor: "#21B6A8"
        }
      }}
    >
      <CardContent sx={{ padding: "0", height: "65%" }}>
        <img src={FloodChart} style={{ padding: "0", margin: "0", width: "100%", height: "100%" }} />
      </CardContent>
      <CardActions sx={{ height: "35%", padding: "0" }}>
        <Checkbox
          sx={{
            // color: pink[800],
            "&.Mui-checked": {
              color: "#21B6A8"
            }
          }}
        />
        <Typography>{data}</Typography>
      </CardActions>
    </Card>
  )
}

export default CustomCard
