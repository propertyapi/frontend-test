import React from "react"
import { Card } from "@mui/material"
import { CardActions } from "@mui/material"
import { CardContent } from "@mui/material"
import { Checkbox } from "@mui/material"
import { Typography } from "@mui/material"
import FloodChart from "../../assests/images/floods.jpg"
type Props = {
  data: string
  isHover: boolean
  hoverHandler: (value: boolean ) => void;
  isChecked: boolean
  setChecked: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const CustomCard = (props: Props) => {
  const { data, isHover = false, hoverHandler, isChecked = false, setChecked } = props
  console.log("hoverHandler",hoverHandler)
  return (
    <Card
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      style={{
        borderRadius: "10px",
        margin: "20px auto",
        width: "250px",
        height: "180px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: isHover ? "#21B6A8" : "transparent"
      }}
    >
      <CardContent sx={{ padding: "0", height: "65%" }}>
        <img src={FloodChart} style={{ padding: "0", margin: "0", width: "100%", height: "100%" }} />
      </CardContent>
      <CardActions sx={{ height: "35%", padding: "0" }}>
        <Checkbox
          checked={isChecked}
          onClick={() => setChecked(!isChecked)}
          sx={{
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
