import React from 'react';
import {CardFlood2 ,CardFlood1, CardFlood3} from './Card.stories';


export default {
    title: 'flood card'
}

export const  CardFloods =() => {
  return (
    <div>
      <CardFlood1/>
      <CardFlood2/>
      <CardFlood3/>
    </div>
  )
}


