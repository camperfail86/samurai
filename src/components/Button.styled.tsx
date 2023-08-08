import styled from "styled-components";

type ButtonPropsType = {
  backgroundColor?: string
}

export const Button = styled.a<ButtonPropsType>`
  text-decoration: none;
  width: 86px;
  padding: 10px 0 10px 0;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: ${props=> props.color || "#ffffff"};
  background-color: ${props=> props.backgroundColor || "#ffffff"};
  border: 2px solid ${props=> props.color || props.backgroundColor};
  border-radius: 6px;
  cursor: pointer;
`