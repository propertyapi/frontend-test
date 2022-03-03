import React, { useState, ReactNode, useRef, useLayoutEffect } from "react"
import ContentContainer from "./contentContainer"
import Content from "./innerContent"
import Title from "./title"
import Button from "./button"

interface PopoverProps {
  trigger: string
  title: ReactNode | (() => ReactNode)
  content: ReactNode | (() => ReactNode)
  placement: string
}

export interface Coords {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
  x: number
  y: number
}

function Popover(props: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false)

  const [coords, setCoords] = useState<Coords>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0
  })

  const { trigger, title, content, placement, ...otherProps } = props

  const getBoundingClientRect = (element: Element) => {
    const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect()
    return { top, right, bottom, left, width, height, x, y }
  }

  const clickedElem = useRef<HTMLButtonElement>(null)
  const hoveredElem = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    function handleClick() {
      setIsOpen((prevState) => !prevState)

      if (clickedElem.current) {
        const coords = getBoundingClientRect(clickedElem.current)
        setCoords(coords)
      }
    }

    function handleMouseOver() {
      setIsOpen(true)
      if (hoveredElem.current) {
        const coords = getBoundingClientRect(hoveredElem.current)
        setCoords(coords)
      }
    }

    function handleMouseLeave() {
      setIsOpen(false)
    }

    function handleResize() {
      if (hoveredElem.current) {
        const coords = getBoundingClientRect(hoveredElem.current)
        setCoords(coords)
      }
      if (clickedElem.current) {
        const coords = getBoundingClientRect(clickedElem.current)
        setCoords(coords)
      }
    }

    clickedElem.current?.addEventListener("click", handleClick)
    hoveredElem.current?.addEventListener("mouseenter", handleMouseOver)
    hoveredElem.current?.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", handleResize)

    return () => {
      clickedElem.current?.removeEventListener("click", handleClick)
      hoveredElem.current?.removeEventListener("mouseenter", handleMouseOver)
      hoveredElem.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  })

  if (!title && !content) {
    return null
  }

  return (
    <div className="container">
      {trigger === "click" ? <Button ref={clickedElem}>Click Me ({placement})</Button> : <Button ref={hoveredElem}>Hover Me</Button>}
      {isOpen && (
        <ContentContainer className={placement} coords={coords}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </ContentContainer>
      )}
    </div>
  )
}

export default Popover
