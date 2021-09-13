import React from 'react';
import { MyLogo, Wrapper } from './Links.styles';
import GitHubIcon from '../../images/GitHub-Mark-Light-64px.png';

const Links = () => (
  <Wrapper>
    <a href='https://github.com/cscolley/'>
      <img src={GitHubIcon} alt="GitHub icon" />
    </a>    
    <a href="https://www.chriscolley.com.au">
      <p><MyLogo>&lt;cc&#47;&gt;</MyLogo>chriscolley.com.au</p>
    </a>
  </Wrapper>
);

export default Links;