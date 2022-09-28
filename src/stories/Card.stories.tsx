import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { CardFlood } from './Card';
import CardImage from '../../images/mini_view.png'

export default {
  title: 'Card',
  component: CardFlood,
} as ComponentMeta<typeof CardFlood>;

const Template: ComponentStory<typeof CardFlood> = (args) => <CardFlood {...args} />;

export const CardFlood3 = Template.bind({});

CardFlood3.args = {
  check: true,
  label: 'Flood zone 3',
  image: CardImage
};


export const CardFlood2 = Template.bind({});
CardFlood2.args = {
  label: 'Flood zone 2',
  image: CardImage
};

export const CardFlood1 = Template.bind({});
CardFlood1.args = {
  label: 'Flood zone 1',
  image: CardImage
};

