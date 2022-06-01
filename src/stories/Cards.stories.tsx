import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cards } from './Cards';

export default {
    title: 'Example/Cards',
    component: Cards,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    variant: 'basicCard',
    cardImageUrl: '/images/CardMedia.png',
    isChecked: false,
    text: 'Flood zone 1'
};

export const Bordered = Template.bind({});
Bordered.args = {
    variant: 'outlinedCard',
    cardImageUrl: '/images/CardMedia.png',
    isChecked: false,
    text: 'Flood zone 2'
};

export const BoxShadow = Template.bind({});
BoxShadow.args = {
    variant: 'boxShadowCard',
    cardImageUrl: '/images/CardMedia.png',
    isChecked: true,
    text: 'Flood zone 3'
};
