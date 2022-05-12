import React from 'react';
//Import all icons
import CheckboxIcon from '../../assets/icons/check-icon.svg'
import CheckboxCheckedIcon from '../../assets/icons/checked-icon.svg'

// Set name for each for mapping
export interface IconProps {
    name:
        | 'checkboxChecked'
        | 'checkbox';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

//Make mapping of icons
const iconMap = {
    checkboxChecked: CheckboxCheckedIcon,
    checkbox:CheckboxIcon
};

const CustomIcon: React.FC<IconProps> = (props) => {
    const { onClick, name } = props
    return <img onClick={()=>onClick} src={iconMap[name]}/>;
};

export default CustomIcon;
