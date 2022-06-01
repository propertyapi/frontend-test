import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

interface CardProps {
    /**
     * Different styles for cards
     */
    variant?: "basicCard" | "outlinedCard" | "boxShadowCard";
    /**
     * Image to show in card
     */
    cardImageUrl?: string;
    /**
     * for checkbox
     */
    isChecked?: boolean;
    /**
     * Text to show for cards
     */
    text: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Cards = ({
  variant = 'basicCard',
  cardImageUrl = '',
  isChecked = false,
  text = '',
  onClick
}: CardProps) => {
    return (
        <Paper variant={variant} sx={{
            width: '229px',
            height: '150px',
            background: '#FFFFFF'
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={cardImageUrl}
                    alt="noImage"
                    sx={{borderRadius: '10px 10px 0 0'}}
                />
                <CardContent sx={{padding: '5px 15px'}}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={isChecked} sx={{
                            color: '#616161',
                            '&.Mui-checked': {
                                color: '#21B6A8',
                            },
                        }} />} label={text} onChange={onClick} />
                    </FormGroup>
                </CardContent>
            </CardActionArea>
        </Paper>
    );
};

