import React, { useEffect, useRef } from 'react';
import { ButtonMain } from '../ButtonMain/ButtonMain';
import { CardWrapper } from '../PricingCard/PricingCard';
import styled from 'styled-components';

import { aniamtionScrollBottom } from '../../style/Animations';

const Wrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 90px;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    padding: 32px;
  }
`;

const StyledPricingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  h1 {
    font-size: 50px;
    font-weight: ${({ theme }) => theme.fontWeight.l};
  }
`;

const StyledPricingCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
  }

  ${CardWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px;

    div {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 18px;
    }

    h1 {
      font-size: 60px;
      font-weight: ${({ theme }) => theme.fontWeight.l};
      margin: 0;

      span {
        font-size: 18px;
      }

      @media (max-width: ${({ theme }) => theme.device.m}) {
        font-size: 40px;
      }
    }

    @media (max-width: ${({ theme }) => theme.device.m}) {
      padding: 32px;
      margin-bottom: 26px;
      width: 60%;
    }

    @media (max-width: ${({ theme }) => theme.device.s}) {
      width: 100%;
      padding: 15px;
    }
  }
`;

const FeaturesWrapper = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 20px;
  }
`;

const Pricing = React.forwardRef((props, ref) => {
  const cardsRef = useRef();

  useEffect(() => {
    const cards = cardsRef.current;

    aniamtionScrollBottom(cards);
  });
  return (
    <Wrapper ref={ref}>
      <StyledPricingHeader>
        <h1>
          Get the right plan <br /> for future product.
        </h1>
      </StyledPricingHeader>
      <StyledPricingCards ref={cardsRef}>
        <CardWrapper>
          <div>Starter</div>
          <h1>Free</h1>
          <FeaturesWrapper>
            <p>1 Website</p>
            <p>5 GB Hosting</p>
            <p>Limited Support</p>
          </FeaturesWrapper>
          <ButtonMain>Get Started</ButtonMain>
        </CardWrapper>
        <CardWrapper orange>
          <div>Premium</div>
          <h1>
            $29<span>/month</span>
          </h1>
          <FeaturesWrapper>
            <p>1 Website</p>
            <p>5 GB Hosting</p>
            <p>Limited Support</p>
          </FeaturesWrapper>
          <ButtonMain orange>Get Started</ButtonMain>
        </CardWrapper>
        <CardWrapper>
          <div>Enterprise</div>
          <h1>
            $49<span>/month</span>
          </h1>

          <FeaturesWrapper>
            <p>1 Website</p>
            <p>5 GB Hosting</p>
            <p>Limited Support</p>
          </FeaturesWrapper>
          <ButtonMain>Get Started</ButtonMain>
        </CardWrapper>
      </StyledPricingCards>
    </Wrapper>
  );
});

export default Pricing;
