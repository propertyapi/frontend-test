import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomIcon from '.';

export default {
  title: 'Atom/Icon',
  component: CustomIcon,
} as ComponentMeta<typeof CustomIcon>;

const Template: ComponentStory<typeof CustomIcon> = (args) => <CustomIcon {...args} />;

export const Icon = Template.bind({});

Icon.args = {
    name: "checkboxChecked",
};