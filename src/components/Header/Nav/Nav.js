import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ButtonMain } from '../../ButtonMain/ButtonMain';

import { animationsMoveY } from '../../../style/Animations';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100px;
  margin-top: 10px;
`;

const StyledLogoWrapper = styled.div`
  width: ${({ hasDeclardeWith }) =>
    hasDeclardeWith ? `${hasDeclardeWith}px` : 'auto'};
  height: 38px;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin: 0 33px;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  display: grid;
  align-items: center;
  grid-template-areas: '. . link1 link2 link3 link4 . . link5 ';

  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: block;
    position: absolute;
    padding: 30px 40px;
    left: 0;
    top: 0;
    opacity: ${({ openMenu }) => (openMenu ? '1' : '0')};
    transform: ${({ openMenu }) =>
      openMenu ? 'translateY(100px)' : 'translateY(-100px)'};
    height: auto;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 15px;
  }

  @media (max-width: ${({ theme }) => theme.device.l}) {
    grid-template-areas: '. . link1 link2 link3 link4  link5 ';
  }
`;

const StyledNavButton = styled.button`
  height: 38px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.l};

  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: 0 33px;
    margin: 14px 0;
    width: 100%;
  }

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
`;

const StyledButtonMain = styled(ButtonMain)`
  grid-area: link5;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: 0 33px;
    margin: 0 auto;
    width: 100%;
  }
`;

const Nav = React.forwardRef(({ openMenu }, ref) => {
  const navRef = useRef();

  console.log(ref[1].current);

  const scrollInto = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const nav = navRef.current;

    animationsMoveY(nav);
  }, []);
  const data = useStaticQuery(graphql`
    query GetHeaderLogo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper ref={navRef}>
      <StyledLogoWrapper hasDeclardeWith={220}>
        <h1>
          <Img
            as="img"
            fluid={data.file.childImageSharp.fluid}
            objectFit="cover"
            alt="growly.com | Grow your
            subscription
            business"
          />
        </h1>
      </StyledLogoWrapper>
      <StyledNav openMenu={openMenu}>
        <StyledNavButton>Home</StyledNavButton>
        <StyledNavButton onClick={() => scrollInto(ref[1])}>
          Features
        </StyledNavButton>
        <StyledNavButton onClick={() => scrollInto(ref[0])}>
          Pricing
        </StyledNavButton>
        <StyledNavButton>Blog</StyledNavButton>

        <StyledButtonMain>Get Started</StyledButtonMain>
      </StyledNav>
    </Wrapper>
  );
});

export default Nav;
