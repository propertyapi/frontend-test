import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Box, CardActionArea, Checkbox, CssBaseline } from "@mui/material"

interface ICardProps {
  title: string
  image: string
}

export const CardComponent = ({ title, image }: ICardProps) => {
  const [value, setValue] = useState(false)

  const handleCheckboxChange = () => {
    setValue(!value)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="green iguana" />
          <CardContent>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 2">
                <Checkbox value={value} checked={value} onChange={handleCheckboxChange} />
              </Box>
              <Box gridColumn="span 6">
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* The rest of your application */}
    </React.Fragment>
  )
}
