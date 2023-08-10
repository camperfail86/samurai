import React from 'react';
import {Wrapper} from "./components/Wrapper.styled";
import {Imagebg} from "./components/Image.styled";
import {Content} from "./components/Content.styled";
import {myTheme} from "./styles/Theme.styled";
import {Paragraph} from "./components/Paragraph.styled";
import Buttons from "./Buttons";
import logo from "./images/background.jpg";
import "./App.css";

function App() {
  return (
    <Wrapper backgroundColor={myTheme.color.defaultWhite}>
      <Imagebg width={280} height={170} src={logo}></Imagebg>
      <Content color={myTheme.color.defaultBlack}>Headline</Content>
      <Paragraph color={myTheme.color.gray}>Faucibus. Faucibus. Sit sit sapien sit
        tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
      <Buttons colors={myTheme.color}></Buttons>
    </Wrapper>
  );
}

export default App;
