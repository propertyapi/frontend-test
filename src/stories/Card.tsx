import React from 'react';
import './Card.css';

interface CardProps {
    label?: string,
    image?:string,
    check?:boolean,
  onClick?: () => void;
}


export const CardFlood = ({
  label,
  image,
  check,
  ...props
}: CardProps) => {
  return (
    <div className='story-card'>
        <img src={image} alt=""/>
        <div className='story-card-body'>
            <input type='checkbox'/>
            <span>{label}</span>
        </div>
    </div>
  );
};
