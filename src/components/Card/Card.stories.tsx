import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CardComponent } from "./Card"

export default {
  component: CardComponent,
  title: "Card Component"
} as ComponentMeta<typeof CardComponent>

export const DefaultCardComponent: ComponentStory<typeof CardComponent> = () => (
  <CardComponent title="flood zone 3" image="https://image.shutterstock.com/image-photo/aerial-view-flooded-forest-plains-260nw-146231834.jpg" />
)
