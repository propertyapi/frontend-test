import { ChangeEvent, useState } from "react"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"

import { useTheme } from "@mui/material/styles"

export const ZoneCard = ({ zone, img }: ZoneCardType) => {
  const [checked, setChecked] = useState(false)
  const theme = useTheme()

  return (
    <Card
      sx={{
        borderRadius: "10px",
        maxWidth: "229px",
        height: "150px",
        border: checked ? `1px solid ${theme.palette.info.main}` : `1px solid ${theme.palette.secondary.main}`,
        boxShadow: checked ? `0px 0px 0px 2px ${theme.palette.secondary.main}` : "none",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          boxShadow: `0px 0px 0px 2px ${theme.palette.secondary.main}`
        }
      }}
      elevation={0}
    >
      <CardMedia component="img" width="100%" height="100" image={img} alt="Card Media" />
      <CardContent
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          padding: "0!important",
          paddingLeft: "15px!important"
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 18 }
                }}
                checked={checked}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
              />
            }
            label={zone}
            sx={{
              "& .MuiFormControlLabel-label": {
                lineHeight: "20.02px",
                letterSpacing: "0.17px"
              }
            }}
          />
        </FormGroup>
      </CardContent>
    </Card>
  )
}

type ZoneCardType = {
  zone: string
  img: string
}
