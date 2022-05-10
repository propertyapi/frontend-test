import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import CustomCard from "./card"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: CustomCard
} as ComponentMeta<typeof CustomCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomCard> = (args) => <CustomCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isHover: false,
  isChecked: false
}
export const Hover = Template.bind({})
Hover.args = {
  isHover: true,
  isChecked: false
}
export const Checked = Template.bind({})
Checked.args = {
  isHover: true,
  isChecked: true
}
