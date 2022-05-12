import { Checkbox } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import { Icon } from '../Icon/Icon.stories'
import { Label } from '../Label/Label.stories'

export interface CustomCheckboxProps {
    isChecked: boolean,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLElement>) => void
}

export const CustomCheckbox: FC<CustomCheckboxProps> = (props) => {
    const { isChecked, label, onChange } = props
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Checkbox  onChange={(e) => onChange(e)} checked={isChecked} icon={<Icon name="checkbox" />} checkedIcon={<Icon name="checkboxChecked" />}></Checkbox>
            <Label label={label}/>
        </Box>
    )
}

export default CustomCheckbox