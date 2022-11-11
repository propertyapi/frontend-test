import { Meta, Story } from "@storybook/react/types-6-0";
import CardComponent, { BasicCardProps } from "../components/card.component";
import img from "../assets/CardMedia.svg";

export default {
  title: "Example/Card",
  component: CardComponent,
  argTypes: {
    label: { name: 'Label', control: 'text', description: 'Add text label', type: "string", defaultValue: "Flood zone 3" },
    checked: { name: 'Checkbox',description: 'State', type: "boolean", defaultValue: false, },
    color: { name: 'Color',description: 'Change color', type: "string" },
    height: { name: 'Height card',description: 'Change height card', type: "string",},
    width: { name: 'Width card',description: 'Change width card', type: "string",},
    disabled: { name: 'Disabled',description: 'On/off checkbox ', type: "boolean",},
    hover: { name: 'Hover',description: 'On/off hover', type: "boolean",},
    img: { name: 'Picture',description: 'Add picture', type: "string",}
  },
  args: {
    height: "100",
    width: "229px",
    img: img,
    label: "Flood zone 3",
    color: "#21B6A8",
    checked: false,
    disabled: false,
    hover: true,
  }
} as Meta;

const Template: Story<BasicCardProps> = (args) => {
  return (<CardComponent {...args} />);
};


export const Unselected = Template.bind({});
Unselected.args = {
  height: "100",
  width: "229px",
  checked: false,
  hover: true,
  disabled: false
};

export const Selected = Template.bind({});
Selected.args = {
  height: "100",
  width: "229px",
  img: img,
  label: "Flood zone 3",
  checked: true,
  hover: false,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  height: "100",
  width: "229px",
  img: img,
  label: "Flood zone 3",
  hover: true,
  disabled: false,
};



