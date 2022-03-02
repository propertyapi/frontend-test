import styled from "styled-components";

interface Props {
    right: number;
    left: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    className: string;
}

const ContentContainer = styled.div`
    width: 177px;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    position: absolute;
    margin-top: 24px;

   &.top {
    left: ${(props: Props) => props.left + "px"};
    bottom: ${(props: Props) => `calc(100% - ${props.bottom + props.height}px)`};
    transform: translate(-25%, -75%);                                                       
   }

   &.top:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    right: 45%;
    bottom: -15px;
    transform: rotate(180deg);
   }
  }

`

export default ContentContainer;