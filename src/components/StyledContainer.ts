import styled from "styled-components"
import { Coords } from "./Popover"

interface Props {
  coords: Coords
  className: string
}

const StyledContainer = styled.div`
  width: 177px;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  position: absolute;
  margin-top: 24px;
  z-index: 1030;

  &:before {
    content: "";
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    position: absolute;
  }

  &.top {
    left: ${(props: Props) => props.coords.left + "px"};
    bottom: ${(props: Props) => `calc(100% - ${props.coords.bottom + props.coords.height}px)`};
    transform: translate(-25%, -75%);
  }

  &.top:before {
    right: 45%;
    bottom: -15px;
    transform: rotate(180deg);
  }

  &.topRight {
    right: ${(props: Props) => `calc(100% - ${props.coords.left + props.coords.width}px)`};
    bottom: ${(props: Props) => `calc(100% - ${props.coords.bottom + props.coords.height}px)`};
    transform: translate(0, -75%);
  }

  &.topRight:before {
    right: 10px;
    bottom: -15px;
    transform: rotate(180deg);
  }

  &.topLeft {
    left: ${(props: Props) => props.coords.left + "px"};
    bottom: ${(props: Props) => `calc(100% - ${props.coords.bottom + props.coords.height}px)`};
    transform: translate(0, -75%);
  }

  &.topLeft:before {
    left: 10px;
    bottom: -15px;
    transform: rotate(180deg);
  }

  &.bottom {
    left: ${(props: Props) => props.coords.left + "px"};
    top: ${(props: Props) => `calc(100% - ${props.coords.bottom - 10}px)`};
    transform: translate(-25%, 0px);
  }

  &.bottom:before {
    right: 45%;
    top: -15px;
  }

  &.bottomRight {
    right: ${(props: Props) => `calc(100% - ${props.coords.left + props.coords.width}px)`};
    top: ${(props: Props) => `calc(100% - ${props.coords.bottom - 10}px)`};
  }

  &.bottomRight:before {
    right: 10px;
    top: -15px;
  }

  &.bottomLeft {
    left: ${(props: Props) => props.coords.left + "px"};
    top: ${(props: Props) => `calc(100% - ${props.coords.bottom - 10}px)`};
  }

  &.bottomLeft:before {
    left: 10px;
    top: -15px;
  }
`

export default StyledContainer
