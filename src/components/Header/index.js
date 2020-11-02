import React from "react";
import Navigation from '../Navigation.js'
import { Root, Wrapper, Logo } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  </Root>
);
