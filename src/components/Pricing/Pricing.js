import React from 'react';
import { ButtonMain } from '../ButtonMain/ButtonMain';
import { CardWrapper } from '../PricingCard/PricingCard';
import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
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

  ${CardWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px;

    div {
      color: ${({ theme }) => theme.colors.grey};
    }

    h1 {
      font-size: 60px;
      font-weight: ${({ theme }) => theme.fontWeight.l};
      margin: 0;
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

const Pricing = () => {
  return (
    <Wrapper>
      <StyledPricingHeader>
        <h1>
          Get the right plan <br /> for future product.
        </h1>
      </StyledPricingHeader>
      <StyledPricingCards>
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
          <div>Starter</div>
          <h1>Free</h1>
          <FeaturesWrapper>
            <p>1 Website</p>
            <p>5 GB Hosting</p>
            <p>Limited Support</p>
          </FeaturesWrapper>
          <ButtonMain>Get Started</ButtonMain>
        </CardWrapper>
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
      </StyledPricingCards>
    </Wrapper>
  );
};

export default Pricing;