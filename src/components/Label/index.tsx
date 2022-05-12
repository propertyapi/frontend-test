import { Typography } from '@mui/material'
import { FC } from 'react'

export interface CustomLabelProps {
    label: string,
}

export const CustomLabel: FC<CustomLabelProps> = (props) => {
    const {label } = props
    return (
        <Typography sx={{ color:'re#1B1B1Bd', fontWeight:'400',fontSize:'14'}}>{label}</Typography>
    )
}

export default CustomLabel