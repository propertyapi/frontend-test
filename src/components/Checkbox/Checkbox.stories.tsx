import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomCheckbox from '.';

export default {
  title: 'Atom/Checkbox',
  component: CustomCheckbox,
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => <CustomCheckbox {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  isChecked: false,
  label: "Flood zone 3"
};