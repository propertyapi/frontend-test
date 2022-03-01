import styled from "styled-components";
import Container from "./container";

const Button = styled.button`
height: 32px;
margin-top: 8px;
margin-left: 8px;
padding: 4px 15px;
color: #fff;
border: 1px solid #1890ff;
border-radius: 2px;
background: #1890ff;
text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
box-shadow: 0 2px #0000000b;
cursor: pointer;

&:hover ${Container} {
  background-color: cyan;
  }
`

export default Button;