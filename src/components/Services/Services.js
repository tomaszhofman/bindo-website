import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ButtonMain } from '../ButtonMain/ButtonMain';

import { aniamtionMoveXScroll } from '../../style/Animations';

const Wrapper = styled.section`
  width: 100%;

  max-width: 1200px;

  margin: 0 auto;
  padding: 100px 33px 0 33px;
`;

const StyledImageWrapper = styled.div`
  width: 305px;
  width: 30%;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 50%;
    padding-bottom: 20px;
  }
`;

const ServicesContentWrapper = styled.div`
  max-width: 500px;
  h2 {
    font-size: 50px;
  }

  h3 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.m};
    color: ${({ theme }) => theme.colors.grey};
    margin: 20px 0 20px 0;
  }

  ${ButtonMain} {
    color: ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    text-align: left;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;

  &:nth-child(1) {
    order: 1;
  }

  &:nth-child(2) {
    ${StyledImageWrapper} {
      order: 2;
    }

    @media (max-width: ${({ theme }) => theme.device.m}) {
      ${StyledImageWrapper} {
        order: 0;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;

const Services = React.forwardRef((props, ref) => {
  const titleRef = useRef();

  useEffect(() => {
    const title = titleRef.current;
    aniamtionMoveXScroll(title, 10);
  });

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Wrapper ref={ref}>
      <Container>
        <StyledImageWrapper>
          <StyledImg fluid={data.allFile.nodes[13].childImageSharp.fluid} />
        </StyledImageWrapper>
        <ServicesContentWrapper>
          <h2 ref={titleRef}>Subscription index</h2>
          <h3>
            A daily dataset to keep you up to date on subscription market trends
            and what's happening in your vertical.
          </h3>
          <ButtonMain>Read more</ButtonMain>
        </ServicesContentWrapper>
      </Container>
      <Container>
        <StyledImageWrapper>
          <StyledImg fluid={data.allFile.nodes[5].childImageSharp.fluid} />
          {console.log(data.allFile.nodes)}
        </StyledImageWrapper>
        <ServicesContentWrapper>
          <h2>Subscription index</h2>
          <h3>
            A daily dataset to keep you up to date on subscription market trends
            and what's happening in your vertical.
          </h3>
          <ButtonMain>Read more</ButtonMain>
        </ServicesContentWrapper>
      </Container>
    </Wrapper>
  );
});

export default Services;
