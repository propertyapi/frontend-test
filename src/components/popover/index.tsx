import { useState, useEffect, useRef } from "react";
import { InnerContainer, StyledContainer, TooltipTarget, TooltipBox } from './styled';

export interface PopoverType {
    placement?: string,
    title: string,
    content: string,
    trigger?: string,
    // outsideRef: any
}

const Popover: React.FC<PopoverType> = (
  { placement = 'top', title, content, trigger = 'click', children }
  ) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const showTooltip = trigger === 'hover' ? isHovered : isClicked;
  const outsideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      /**
       * remove tooltip if clicked on outside of children
      **/
      
      function handleClickOutside(event:MouseEvent):void {
        if(!outsideRef?.current) return;
        if(!event.target) return;
        
        if (outsideRef.current && !outsideRef.current?.contains(event.target as Node)) {
          setIsClicked(false);
        }
      }

      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("click", handleClickOutside);
      };
  }, []);
  
  return (
    <StyledContainer onClick={() => setIsClicked(!isClicked)} >
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        ref={outsideRef}
      >{children}</TooltipTarget>
      {
        showTooltip && <InnerContainer position={placement}>
          <TooltipBox position={placement}>
            <h3>{title}</h3>
            {content}
          </TooltipBox>
        </InnerContainer>
      }
    </StyledContainer>
  );
}

export default Popover;
