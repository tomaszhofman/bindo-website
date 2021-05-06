import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeroLeftBar from './HeroLeftBar/HeroLeftBar';

import {
  animationOpacity,
  animationsMoveX,
  animationsMoveY,
} from '../../style/Animations';

const Wrapper = styled.section`
  height: 80vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  z-index: 99;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.device.xl}) {
    padding: 50px 30px;
    height: 100vh;
  }

  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

const HeroStyledImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 100%;
    padding-top: 30px;
  }

  div {
    width: 100%;
    object-fit: fill;
    max-width: 500px;
  }
`;

const ImageWrapper = styled(Img)`
  width: 100%;
  height: 100%;
`;

const HeroSection = () => {
  const heroSectionRef = useRef();

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    animationOpacity(heroSection, 2);
  });
  const data = useStaticQuery(graphql`
    query GetHeroLogo {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper ref={heroSectionRef}>
      <HeroLeftBar />
      <HeroStyledImg>
        <div>
          <ImageWrapper fluid={data.file.childImageSharp.fluid} />
        </div>
      </HeroStyledImg>
    </Wrapper>
  );
};

export default HeroSection;
