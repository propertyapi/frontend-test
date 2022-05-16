import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { CardComponent } from "../../components/Card/Card"
import { Grid } from "@mui/material"

const dummyData = [
  {
    id: 1,
    title: "flood here 3",
    image: "https://image.shutterstock.com/image-photo/aerial-view-flooded-forest-plains-260nw-146231834.jpg"
  },
  {
    id: 2,
    title: "flood here 3",
    image: "https://image.shutterstock.com/image-photo/aerial-view-flooded-forest-plains-260nw-146231834.jpg"
  },
  {
    id: 3,
    title: "flood here 3",
    image: "https://image.shutterstock.com/image-photo/aerial-view-flooded-forest-plains-260nw-146231834.jpg"
  }
]

export const Card = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid direction={"column"} container justifyContent={"center"} alignItems="center" spacing={{ xs: 2, md: 5 }}>
        {dummyData.map((item, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardComponent image={item.image} title={item.title} />
            </Grid>
          )
        })}
      </Grid>
      {/* The rest of your application */}
    </React.Fragment>
  )
}
