import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CustomLayerCard } from "./CustomLayerCard"

export default {
  title: "Components/CustomLayerCard",
  component: CustomLayerCard,
  argTypes: {
    name: {
      contorl: "text"
    },
    img: {
      control: "text"
    }
  }
} as ComponentMeta<typeof CustomLayerCard>

const Template: ComponentStory<typeof CustomLayerCard> = (args) => <CustomLayerCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  name: "Floodzone 3",
  img: "/img/CardMedia.png"
}
