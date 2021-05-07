import React, { useRef } from 'react';
import Header from '../components/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';
import { GlobalStyle } from '../style/GlobalStyles';
import HeroSection from '../components/HeroSection/HeroSection';
import Logos from '../components/Logos/Logos';
import Services from '../components/Services/Services';
import OtherServices from '../components/OtherServices/OtherServices';
import Pricing from '../components/Pricing/Pricing';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  const pricingRef = useRef(null);
  const servicesRef = useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header ref={[pricingRef, servicesRef]} />
      <HeroSection />
      <Logos />
      <Services ref={servicesRef} />
      <OtherServices />
      <Pricing ref={pricingRef} />
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
