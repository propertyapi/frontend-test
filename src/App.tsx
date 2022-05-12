import "./App.css"
import Container from '@mui/material/Container'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'

import {CardComponent} from './stories/card.stories'

function App() {

  return (
    <Container maxWidth='xl' sx={{height: '100vh', minHeight: '100vh'}}>
      <Grid direction="column" display="flex" justifyContent="center" alignItems="center" gap={3} sx={{height: '100vh', minHeight: '100vh'}}>
        {Array.from(Array(3)).map((_, index) => (
          <CardComponent index={index} key={`card_${index}`} />
        ))}
      </Grid>
      </Container>
  )
}

export default App
