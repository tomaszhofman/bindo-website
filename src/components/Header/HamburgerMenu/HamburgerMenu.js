import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  isolation: isolate;
  position: absolute;
  top: 60px;
  right: 50px;
  height: 16px;
  display: none;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    display: block;
  }
`;
const StyledBox = styled.span`
  width: 27px;
  height: 100%;
  position: relative;
  display: inline-block;

  span {
    width: 19px;
    height: 2px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 auto;
    background-color: black;
    border-radius: 10px;
  }

  &::after {
    content: '';
    border-radius: 10px;
    height: 2px;
    width: 27px;
    background-color: black;
    position: absolute;
    right: 0;
    top: 7px;
  }

  &::before {
    content: '';
    border-radius: 10px;
    height: 2px;
    width: 27px;
    background-color: black;
    position: absolute;
    right: 0;
    top: -7px;
  }
`;
const HamburgerMenu = () => {
  return (
    <Wrapper>
      <StyledBox>
        <span></span>
      </StyledBox>
    </Wrapper>
  );
};

export default HamburgerMenu;
