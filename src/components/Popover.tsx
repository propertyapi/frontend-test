import React, { useState, ReactNode, useRef, useLayoutEffect } from "react"
import useDebounce from "./useDebounce"
import Container from "./StyledContainer"
import InnerContent from "./StyledInnerContent"
import Title from "./StyledTitle"
import Button from "./StyledButton"

interface PopoverProps {
  trigger: "click" | "hover"
  title: ReactNode | (() => ReactNode)
  content: ReactNode | (() => ReactNode)
  placement: "top" | "topRight" | "topLeft" | "bottom" | "bottomRight" | "bottomLeft"
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

  const debouncedValue = useDebounce<Coords>(coords, 1000)

  const { trigger, title, content, placement } = props

  const getBoundingClientRect = (element: Element) => {
    const { top, right, bottom, left, width, height, x, y } = element.getBoundingClientRect()
    return { top, right, bottom, left, width, height, x, y }
  }

  const buttonRef = useRef<HTMLButtonElement>(null)

  function handleClick() {
    setIsOpen((prevState) => !prevState)
  }

  function handleMouseOver() {
    setIsOpen(true)
  }

  function handleMouseLeave() {
    setIsOpen(false)
  }

  useLayoutEffect(() => {
    console.log("resized")
    if (buttonRef.current) {
      setCoords(getBoundingClientRect(buttonRef.current))

      if (trigger === "click") {
        buttonRef.current.addEventListener("click", handleClick)
      } else if (trigger === "hover") {
        buttonRef.current.addEventListener("mouseenter", handleMouseOver)
        buttonRef.current.addEventListener("mouseleave", handleMouseLeave)
      }
    }

    return () => {
      buttonRef.current?.removeEventListener("click", handleClick)
      buttonRef.current?.removeEventListener("mouseenter", handleMouseOver)
      buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [debouncedValue])

  if (!title && !content) {
    return null
  }

  return (
    <div className="popover">
      {trigger === "click" ? <Button ref={buttonRef}>click {placement}</Button> : <Button ref={buttonRef}>hover {placement}</Button>}
      {isOpen && (
        <Container className={placement} coords={coords}>
          <Title>{title}</Title>
          <InnerContent>{content}</InnerContent>
        </Container>
      )}
    </div>
  )
}

export default Popover
