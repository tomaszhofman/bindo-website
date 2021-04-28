import React from 'react';
import styled from 'styled-components';
import { ButtonMain } from '../../ButtonMain/ButtonMain';

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    line-height: 1;
    font-size: 60px;
    padding-top: 60px;
  }
`;

const TitleWrapper = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.l};
  color: ${({ theme }) => theme.colors.black};
  padding-top: 83px;
  font-size: 80px;
  line-height: 1.25;
  max-width: 480px;

  @media (max-width: ${({ theme }) => theme.device.s}) {
    line-height: 1;
    font-size: 50px;
  }
`;

const TextWrapper = styled.p`
  max-width: 480px;
  margin: 30px 0 30px 0;
  line-height: 1.38;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.device.m}) {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.m};
  }
`;

const ButtonWrapper = styled(ButtonMain)`
  max-width: 480px;
`;

const HeroLeftBar = () => {
  return (
    <Wrapper>
      <TitleWrapper>Grow your subscription business</TitleWrapper>
      <TextWrapper>
        Outcome-centered products that reduce churn, optimize pricing, and grow
        your subscription business end-to-end.
      </TextWrapper>
      <ButtonWrapper>Get Started</ButtonWrapper>
    </Wrapper>
  );
};

export default HeroLeftBar;
