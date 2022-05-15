import React from 'react'
import Map from './assets/map.svg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './zoneCard.css'

interface ZoneCardProps {
    checked: boolean,
    outlined: boolean,
}

const ZoneCard: React.FC<ZoneCardProps> = ({ checked, outlined }) => {
    return (
        <Card
            sx={{
                width: 500,
                padding: 0,
                borderRadius: '20px',
                border: outlined && !checked ? 'none' : checked ? '2px solid #3D8479' :  '2px solid #EFEFEF',
                boxShadow: 'none',
                outline: outlined || checked ? '4px solid #65E9D9' : 'none'
            }}>
            <CardContent sx={{ padding: 0 }}>
                <CardMedia
                    component="img"
                    image={Map}
                    alt="zoning map"
                    height={250}
                    width={500}
                    sx={{ objectFit: 'cover', borderTopLeftRadius: checked ?  '18px' : '20px', borderTopRightRadius: checked ? '18px' : '20px' }}
                />
            </CardContent>
            <CardActions sx={{ paddingY: 2, paddingLeft: 4 }}>
                <FormControlLabel 
                    control={<Checkbox checked={checked} color="success" />} 
                    label="Flood zone 3" 
                    sx={{ fontFamily: 'Jakarta', fontSize: '30px' }}
                />
            </CardActions>
        </Card>
    )
}
export default ZoneCard;