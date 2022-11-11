import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";



export interface BasicCardProps {
  label: string;
  height?: string;
  width?: string;
  img: string;
  color?: string;
  checked: boolean;
  disabled?: boolean;
  hover?: boolean;
}


const CardComponent: React.FC<BasicCardProps> =
  ({ label,disabled, hover, height, width, img, color, checked, ...props }) => {

    const styleCard = {
      maxWidth: width,
      border: "1px solid #EFEFEF", borderRadius: "10px",
      boxShadow: checked ? "0px 0px 0px 2px #65E9D9" : "",
      "&:hover": {
        boxShadow: hover ? "0px 0px 0px 2px #65E9D9" : ""
      }
    };

    const styleCheckbox = {
      color: "black", "&.Mui-checked": { color: color }
    };

    return (
      <Card sx={styleCard}>
        <CardMedia
          component="img"
          height={height}
          image={img}
          alt="image"
        />
        <CardContent>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                checked={checked}
                disabled={disabled}
                {...label}
                sx={styleCheckbox}
              />
            } label={label} />
          </FormGroup>
        </CardContent>
      </Card>
    );
  };

export default CardComponent;
