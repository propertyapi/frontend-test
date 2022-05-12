import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomLabel from './';

export default {
  title: 'Atom/Label',
  component: CustomLabel,
} as ComponentMeta<typeof CustomLabel>;

const Template: ComponentStory<typeof CustomLabel> = (args) => <CustomLabel {...args} />;

export const Label = Template.bind({});

Label.args = {
  label: "I am label",
};