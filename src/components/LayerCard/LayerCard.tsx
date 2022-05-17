import { Checkbox, FormControlLabel } from "@mui/material"
import Box from "@mui/material/Box"
import React from "react"
import { useStyles } from "./stylesLayerCard"

interface LayerCardProps {
  label: string
  checked: boolean
  image: JSX.Element
  forceHover?: boolean
  onChange: (isChecked: boolean) => void
}

export const LayerCard: React.FC<LayerCardProps> = ({ forceHover, label, checked, image, onChange }) => {
  const classes = useStyles({ checked, forceHover: !!forceHover })
  const handleChange = () => {
    onChange(!checked)
  }

  return (
    <Box component="div" className={classes.root}>
      <Box className={classes.image}>{image}</Box>
      <Box className={classes.checkboxContainer}>
        <FormControlLabel
          color="secondary"
          className={classes.label}
          control={<Checkbox className={classes.checkbox} onChange={handleChange} color="primary" size="small" checked={checked} />}
          label={label}
        />
      </Box>
    </Box>
  )
}
