import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import { CardActionArea, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup } from "@mui/material"
import myImage from "../Assets/Images/frontendTest.png"
import "@fontsource/plus-jakarta-sans" // Defaults to weight 400.

export default function OutlinedCard(props: {}) {
  const {} = props
  const [checkboxState, setCheckboxState] = React.useState(false)

  const handleChange = () => {
    setCheckboxState(!checkboxState)
  }

  const card = (
    <React.Fragment>
      <CardActionArea>
        <CardMedia style={{ borderRadius: "10px 10px 0 0" }} component="img" src={myImage} alt="frontendTest" />
      </CardActionArea>
      <CardActions>
        <FormControl sx={{ mx: 3 }} component="fieldset" variant="standard" style={{ borderRadius: "0px 0px 10px 10px" }}>
          <FormGroup style={{ fontFamily: "Plus Jakarta Sans" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxState}
                  onChange={handleChange}
                  name="cb"
                  sx={{
                    "&.Mui-checked": {
                      color: "#21B6A8"
                    }
                  }}
                />
              }
              label="Flood Zone 3"
            />
          </FormGroup>
        </FormControl>
      </CardActions>
    </React.Fragment>
  )

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="card" variant="outlined" sx={{ borderRadius: "10px", "&:hover": { border: "3px solid #21B6A8" } }}>
        <div style={{ borderRadius: "10px", border: checkboxState ? "1.5px solid #3D8479" : "" }}>{card}</div>
      </Card>
    </Box>
  )
}
