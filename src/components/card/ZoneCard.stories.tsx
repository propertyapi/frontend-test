import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ZoneCard } from "./ZoneCard"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ZoneCard",
  component: ZoneCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    img: { control: "text" },
    zone: { control: "text" }
  }
} as ComponentMeta<typeof ZoneCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ZoneCard> = (args) => <ZoneCard {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  img: "./card/CardMedia.png",
  zone: "Flood zone 3"
}
