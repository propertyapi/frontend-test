import { makeStyles } from "@mui/styles"

interface StyleProps {
  checked: boolean
  forceHover: boolean
}

export const useStyles = makeStyles({
  root: ({ checked, forceHover }: StyleProps) => {
    return {
      width: 229,
      height: 150,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: checked ? "#3D8479" : "#EFEFEF",
      ...(forceHover && {
        borderColor: "#65E9D9"
      }),
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow .2s",
      boxShadow: checked || forceHover ? "0px 0px 0px 2px #65E9D9" : "none",
      "&:hover": {
        borderColor: "#65E9D9",
        boxShadow: `0px 0px 0px 2px #65E9D9`
      }
    }
  },
  image: {
    "& svg": {
      borderRadius: "10px 10px 0 0",
      height: 100,
      width: "100%"
    }
  },
  label: {
    margin: 0
  },
  checkboxContainer: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }
})
