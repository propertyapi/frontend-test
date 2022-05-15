import { ComponentStory, ComponentMeta } from '@storybook/react';
import ZoneCard from './ZoneCard';

export default {
  title: 'Example/ZoneCard',
  component: ZoneCard,
} as ComponentMeta<typeof ZoneCard>;

const Template: ComponentStory<typeof ZoneCard> = (args) => <ZoneCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked: false,
  outlined: false
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  outlined: true
};

export const Outlined = Template.bind({});
Outlined.args = {
    checked: false,
    outlined: true
};

