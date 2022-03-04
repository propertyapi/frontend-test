import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.div`
  border: none;
  background: none;
  padding: 5px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

export const InnerContainer = styled.div<StyledInnerContainerProps>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;

  ${({position}) => {

    switch(position) {
      case 'bottom':
        return css`
          bottom: unset;
          top: calc(100% + 5px)
        `;
      case 'left':
        return css`
          margin-left: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      case 'top':
        return css`
          bottom: calc(100% + 5px);
        `;

    }
  }}
`;

export const TooltipBox = styled.span<StyledInnerContainerProps>`
  position: relative;
  border-radius: 8px;
  padding: 10px 8px;
  font-size: 0.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0,0,0,0.2);
  background-color: #fff;
  color: #000000d9;
  text-align: center;

  & h3 {
    text-align: left;
    margin: 0px 0px 6px;
    padding-bottom: 8px;
    border-bottom: solid 1px #000000d9;
  }

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border: solid 5px #000;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({position}) => {

    switch(position) {
      case 'bottom':
        return css`
          &:after {
            bottom: 100%;
            top: unset;
            width: 1px;
            left: calc(50% - 5px);
            border-color: transparent transparent #fff transparent;
          }
        `;
      case 'left':
        return css`
          &:after {
            left: 100%;
            top: calc(50% - 5px);
            border-color: transparent transparent transparent #fff;
          }
        `;
      case 'right':
        return css`
          &:after {
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
            border-color: transparent #fff transparent  transparent;
          }
        `;
      default:
        return css`
          &:after {
            bottom: unset;
            top: 100%;
            width: 1px;
            left: calc(50% - 5px);
            border-color: #fff transparent transparent  transparent;
          }
        `;

    }
  }}
`;

export type TooltipPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom';

interface StyledInnerContainerProps {
  readonly position: TooltipPlacement | string;
  children?: React.ReactNode;
}

