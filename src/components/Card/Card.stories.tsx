import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomCard from '.';

export default {
  title: 'Components/Card',
  component: CustomCard,
  argTypes: {
    variant: {
      options: ['unselected', 'selected', 'hovered'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof CustomCard>;

const Template: ComponentStory<typeof CustomCard> = (args) => <CustomCard {...args} />;

export const Card = Template.bind({});

Card.args = {
  isChecked: false,
  variant: "unselected",
  title: "Flood zone 3",
  handleCardSelect: (e) => console.log("Card Clicked")
};