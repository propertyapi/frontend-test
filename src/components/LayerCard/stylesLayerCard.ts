import { Theme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"

interface StyleProps {
  checked: boolean
  forceHover: boolean
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: ({ checked, forceHover }: StyleProps) => {
    return {
      width: 229,
      height: 150,
      backgroundColor: theme.layerCard.background.main,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.layerCard.border.unselected,
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow .2s",
      boxShadow: checked || forceHover ? `0px 0px 0px 2px ${theme.layerCard.shadow.hover}` : "none",
      "&:hover": {
        borderColor: theme.layerCard.border.hover,
        boxShadow: `0px 0px 0px 2px ${theme.layerCard.shadow.hover}`,
        // on checked prop and hover
        ...(checked && {
          borderColor: theme.layerCard.border.selected
        })
      },
      // on force hover prop
      ...(forceHover && {
        borderColor: theme.layerCard.border.hover
      }),
      // on checked prop
      ...(checked && {
        borderColor: theme.layerCard.border.selected
      })
    }
  },
  image: {
    height: 100,
    "& svg": {
      borderRadius: "9px 9px 0 0",
      height: 100,
      width: "100%"
    }
  },
  label: {
    userSelect: "none",
    "&.MuiFormControlLabel-root": {
      margin: 0
    },
    "& .MuiTypography-root": {
      color: theme.layerCard.label.main,
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "0.17px",
      textAlign: "left"
    }
  },
  checkboxContainer: {
    height: 50,
    padding: "0 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  checkbox: {
    padding: 8
  }
}))
