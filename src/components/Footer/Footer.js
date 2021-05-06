import React from 'react';
import styled from 'styled-components';
import { ButtonMain } from '../ButtonMain/ButtonMain';
import twitterIcon from '../../assets/images/social/twitter.svg';
import facebookIcon from '../../assets/images/social/facebook.svg';
import instagramIcon from '../../assets/images/social/instagram.svg';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 50%;
  padding: 140px;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    height: 100%;
    padding: 100px;
  }

  @media (max-width: ${({ theme }) => theme.device.s}) {
    height: 100%;
    padding: 50px;
  }
`;

const Wrapper = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterUpperWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: grid;
    grid-template-areas:
      'cta link1'
      'link2 link3';
  }
`;

const CallToAction = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    grid-area: link2;
    min-width: 300px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 0px 20px 40px 0;
    font-size: 22px;
    font-weight: ${({ theme }) => theme.fontWeight.m};
  }

  ${ButtonMain} {
    width: 200px;
    background-color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    font-size: 18px;
  }
`;

const GridWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-areas: 'link1     link2   link3';

  @media (max-width: ${({ theme }) => theme.device.m}) {
    grid-template-areas: unset;
    display: unset;
  }
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

  &:nth-child(2) {
    grid-area: link2;
  }
  &:nth-child(3) {
    grid-area: link3;
  }

  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin-bottom: 30px;
  }
`;

const FooterMenuItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 10px 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 82px;

  div {
    display: flex;
  }

  p {
    margin-right: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SocialLogosWrapper = styled.div`
  display: inline-block;

  img {
    margin-right: 15px;
  }
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
              <FooterMenuItem>Email Marketing</FooterMenuItem>
              <FooterMenuItem>Campaigns</FooterMenuItem>
              <FooterMenuItem>Branding</FooterMenuItem>
              <FooterMenuItem>Offline</FooterMenuItem>
            </FooterMenuColumn>
            <FooterMenuColumn>
              <div>About</div>
              <FooterMenuItem>Our Story</FooterMenuItem>
              <FooterMenuItem>Benefits</FooterMenuItem>
              <FooterMenuItem>Team</FooterMenuItem>
              <FooterMenuItem>Careers</FooterMenuItem>
            </FooterMenuColumn>
            <FooterMenuColumn>
              <div>Help</div>
              <FooterMenuItem>FAQ</FooterMenuItem>
              <FooterMenuItem>Contact</FooterMenuItem>
              <FooterMenuItem>Benefits</FooterMenuItem>
            </FooterMenuColumn>
          </GridWrapper>
        </FooterUpperWrapper>

        <FooterBottom>
          <div>
            <p>Privacy Policy </p> <p>Terms & Conditions</p>
          </div>
          <SocialLogosWrapper>
            <img src={facebookIcon} alt="facebook" />
            <img src={instagramIcon} alt="instagram" />
            <img src={twitterIcon} alt="twitter" />
          </SocialLogosWrapper>
        </FooterBottom>
      </Wrapper>
    </Background>
  );
};

export default Footer;
