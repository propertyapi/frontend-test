import React, { useState,ReactNode, useEffect } from "react";
import ContentContainer from "./contentContainer";
import Content from "./innerContent";
import Title from "./title";
import Button from "./button"

interface PopoverProps {
    trigger: string;
    title: ReactNode | (() => ReactNode);
    content: ReactNode | (() => ReactNode);
    placement: string;
};

function Popover(props: PopoverProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [bottom, setBottom] = useState(0);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const {trigger, title, content, placement,...otherProps} = props;

    if (!title && !content) {
        return null;
    }

   function handleClick () {
        setIsOpen(prevState => !prevState);
        const elem = document.getElementsByClassName("popover-button")[0];
        const {width, right, left, top, bottom, height} = elem.getBoundingClientRect();
        setTop(prevState => top)
        setBottom(prevState => bottom)
        setRight(prevState => right)
        setLeft(prevState => left)
        setHeight(prevState => height)
        setWidth(prevState => width)
   }

   function handleMouseEnter() {
       setIsOpen(true);
       const elem = document.getElementsByClassName("popover-button")[0];
        const { right, bottom, width, height} = elem.getBoundingClientRect();
        setTop(prevState => top)
        setBottom(prevState => bottom)
        setRight(prevState => right)
        setLeft(prevState => left)
        setHeight(prevState => height)
        setWidth(prevState => width)
   }
    return (
       <div className="container">
            {
                trigger === "click" ? 
                <Button 
                className="popover-button"
                onClick={handleClick}>
                    Click Me
                </Button> :
                <Button
                className="popover-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsOpen(false)}
                >
                    Hover Me
                </Button>
            }
            { isOpen && 
                <ContentContainer 
                    className={placement}
                    right={right}
                    left={left}
                    top={top}
                    bottom={bottom}
                    width={width}
                    height={height}
                >
                    <Title>{title}</Title>
                    <Content>{content}</Content>
                </ContentContainer>
              
            }
       </div>
    )
}

export default Popover;