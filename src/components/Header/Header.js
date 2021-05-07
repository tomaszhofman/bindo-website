import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Nav from './Nav/Nav';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  isolation: isolate;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const NavAndHamburgerWrapper = styled.div`
  width: 100%;
  padding: 0 33px;
  position: relative;
`;

const Header = React.forwardRef((props, ref) => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(ref);
  return (
    <Wrapper>
      <NavAndHamburgerWrapper>
        <Nav openMenu={openMenu} ref={ref} />
        <HamburgerMenu
          onClick={() => setOpenMenu(!openMenu)}
          openMenu={openMenu}
        />
      </NavAndHamburgerWrapper>
    </Wrapper>
  );
});

export default Header;
