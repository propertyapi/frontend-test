import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import { ChangeEvent, useState } from "react"

type CustomLayerCardProps = {
  img: string
  name: string
}

export const CustomLayerCard = ({ img, name }: CustomLayerCardProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <Card
      sx={{
        borderRadius: "10px",
        maxWidth: "220px",
        height: "150px",
        border: "1px solid #EFEFEF",
        boxShadow: checked ? "0px 0px 0px 2px #65e9d9" : "none",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          boxShadow: "0px 0px 0px 2px #65e9d9"
        }
      }}
      elevation={0}
    >
      <CardMedia component="img" height="100" image={img} alt="Card Media" />
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
                  color: "#21B6A8",
                  "&.Mui-checked": {
                    color: "#21B6A8"
                  },
                  "& .MuiSvgIcon-root": { fontSize: 18 }
                }}
                checked={checked}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
              />
            }
            label={name}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                lineHeight: "20.02px",
                letterSpacing: "0.17px",
                color: "#1B1B1B"
              }
            }}
          />
        </FormGroup>
      </CardContent>
    </Card>
  )
}
