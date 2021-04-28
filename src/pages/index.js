import React from 'react';
import Header from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';
import { GlobalStyle } from '../style/GlobalStyles';
import HeroSection from '../components/HeroSection/HeroSection';
import Logos from '../components/Logos/Logos';
import Services from '../components/Services/Services';
import OtherServices from '../components/OtherServices/OtherServices';

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <Logos />
      <Services />
      <OtherServices />
    </ThemeProvider>
  );
};

export default IndexPage;
