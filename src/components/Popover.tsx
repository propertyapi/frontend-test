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

  const { trigger, title, content, placement } = props

  const getBoundingClientRect = (element: Element) => {
    const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect()
    return { top, right, bottom, left, width, height, x, y }
  }

  const buttonRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    if (buttonRef.current) {
      const coords = getBoundingClientRect(buttonRef.current)
      setCoords(coords)
    }

    function handleClick() {
      setIsOpen((prevState) => !prevState)
    }

    function handleMouseOver() {
      setIsOpen(true)
    }

    function handleMouseLeave() {
      setIsOpen(false)
    }

    function handleResize() {
      if (buttonRef.current) {
        const coords = getBoundingClientRect(buttonRef.current)
        setCoords(coords)
      }
    }

    if (buttonRef.current) {
      if (trigger === "click") {
        buttonRef.current.addEventListener("click", handleClick)
      } else if (trigger === "hover") {
        buttonRef.current.addEventListener("mouseenter", handleMouseOver)
        buttonRef.current.addEventListener("mouseleave", handleMouseLeave)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      buttonRef.current?.removeEventListener("click", handleClick)
      buttonRef.current?.removeEventListener("mouseenter", handleMouseOver)
      buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!title && !content) {
    return null
  }

  return (
    <div className="container">
      {trigger === "click" ? <Button ref={buttonRef}>click {placement}</Button> : <Button ref={buttonRef}>hover {placement}</Button>}
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
