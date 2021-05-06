import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import logo1 from '../../assets/images/brands/logo1.png';
import logo2 from '../../assets/images/brands/logo2.png';
import logo3 from '../../assets/images/brands/logo3.png';
import logo4 from '../../assets/images/brands/logo4.png';
import logo5 from '../../assets/images/brands/logo5.png';

import { aniamtionScrollBottom } from '../../style/Animations';

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  padding: 64px 33px 0 33px;
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-areas: 'link1 link2 link3 link4 link5';
  align-items: center;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    height: 100%;

    grid-template-areas:
      'link1 . link3'
      'link2 . link4 '
      '. link5 . ';
  }

  @media (max-width: ${({ theme }) => theme.device.s}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledLogo = styled.img`
  padding: 15px;
  &:nth-child(1) {
    grid-area: link1;
  }

  &:nth-child(2) {
    grid-area: link2;
  }

  &:nth-child(3) {
    grid-area: link3;
  }
  &:nth-child(4) {
    grid-area: link4;
  }

  &:nth-child(5) {
    grid-area: link5;
  }
`;

const Logos = () => {
  const logoRef = useRef();

  useEffect(() => {
    const logo = logoRef.current;

    aniamtionScrollBottom(logo);
  });
  return (
    <Wrapper>
      <LogoWrapper ref={logoRef}>
        <StyledLogo src={logo1} alt="logo1" />
        <StyledLogo src={logo2} alt="logo2" />
        <StyledLogo src={logo3} alt="logo3" />
        <StyledLogo src={logo4} alt="logo4" />
        <StyledLogo src={logo5} alt="logo5" />
      </LogoWrapper>
    </Wrapper>
  );
};

export default Logos;
