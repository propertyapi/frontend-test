import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { ReactComponent as CardMedia } from "./CardMedia.svg"
import { LayerCard } from "./LayerCard"

export default {
  title: "Components/LayerCard",
  component: LayerCard,
  args: {
    image: <CardMedia />,
    label: "Flood zone 3",
    checked: false
  }
} as ComponentMeta<typeof LayerCard>

const Template: ComponentStory<typeof LayerCard> = (args) => {
  return <LayerCard {...args} />
}

export const Unselected = Template.bind({})

export const Hovered = Template.bind({})
Hovered.args = {
  forceHover: true
}

export const Selected = Template.bind({})
Selected.args = {
  checked: true
}
