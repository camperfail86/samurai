import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type WrapperPropsType = {
  backgroundColor: string
}

export const Wrapper = styled.div<WrapperPropsType>`
  width: 300px;
  margin: 50px auto 0 auto;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color: ${myTheme.color.defaultWhite};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`