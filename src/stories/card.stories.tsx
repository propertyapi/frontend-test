import React from "react"
import MaterialCard from "../MaterialCard"
import { ComponentStory } from "@storybook/react"

export default {
  title: "Material/Card",
  component: MaterialCard
}

const Template: ComponentStory<typeof MaterialCard> = (args) => <MaterialCard {...args} />

//👇 Each story then reuses that template
export const MaterialCardIndex = Template.bind({})
MaterialCardIndex.args = {
  index: 2,
  key: "card_2",
  label: "Flood Zone 3"
}
