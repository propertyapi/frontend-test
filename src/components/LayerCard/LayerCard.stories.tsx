import { ComponentMeta, ComponentStory } from "@storybook/react"
import React, { useState } from "react"
import { ReactComponent as CardMedia } from "./CardMedia.svg"
import { LayerCard } from "./LayerCard"

export default {
  title: "Components/LayerCard",
  component: LayerCard,

  args: {
    image: <CardMedia />,
    label: "Flood zone 3",
    checked: false
  },
  argTypes: {
    onChange: {
      table: {
        disable: true
      }
    },
    image: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof LayerCard>

const Template: ComponentStory<typeof LayerCard> = (args) => {
  const [checked, setChecked] = useState(args.checked)
  const handleChange = () => {
    setChecked(!checked)
  }

  return <LayerCard {...args} checked={args.checked || checked} onChange={handleChange} />
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
