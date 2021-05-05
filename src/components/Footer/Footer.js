import React from 'react';
import styled from 'styled-components';
import { ButtonMain } from '../ButtonMain/ButtonMain';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 60vh;
  padding: 140px;
`;

const Wrapper = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterUpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CallToAction = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 0px 20px 40px 0;
    font-size: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.m};
  }

  ${ButtonMain} {
    width: 40%;
    background-color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    font-size: 18px;
  }
`;

const GridWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-areas: 'link1     link2   link3';
`;

const FooterMenuColumn = styled.ul`
  div {
    margin-bottom: 22px;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 16px;
  }
  &:nth-child(1) {
    grid-area: link1;
  }
`;

const FooterMenuItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 82px;
`;

const Footer = () => {
  return (
    <Background>
      <Wrapper>
        <FooterUpperWrapper>
          <CallToAction>
            <h3>Ready to get started?</h3>
            <ButtonMain orange>Get Started</ButtonMain>
          </CallToAction>
          <GridWrapper>
            <FooterMenuColumn>
              <div>Services</div>
              <FooterMenuItem>test</FooterMenuItem>
            </FooterMenuColumn>
            <FooterMenuColumn>
              <div>About</div>
              <FooterMenuItem>test</FooterMenuItem>
            </FooterMenuColumn>
            <FooterMenuColumn>
              <div>Help</div>
              <FooterMenuItem>test</FooterMenuItem>
            </FooterMenuColumn>
          </GridWrapper>
        </FooterUpperWrapper>

        <FooterBottom>
          <div>Privacy Policy Privacy Policy</div>
        </FooterBottom>
      </Wrapper>
    </Background>
  );
};

export default Footer;
