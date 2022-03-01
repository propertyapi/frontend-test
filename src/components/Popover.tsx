import React, { useState,ReactNode } from "react";
import Container from "./container";
import Content from "./content";
import Title from "./title";
import Button from "./button"

interface PopoverProps {
    trigger: string;
    title: ReactNode | (() => ReactNode);
    content: ReactNode | (() => ReactNode);
    placement: string;
};

function Popover (props: PopoverProps) {
    const [isOpen, setIsOpen] = useState(true);

    const {trigger, title, content, placement, ...otherProps} = props;

    if (!title && !content) {
        return null;
    }

    
    const handleClick = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <>
        {trigger === "click" ? 
        <Button>Click Me</Button> : 
        <Button>Hover Me</Button>
        }
        { isOpen && 
        <Container>
            {title && <Title>{title}</Title>}
            <Content>{content}</Content>
        </Container>
        }
        </>
    )
}

export default Popover;