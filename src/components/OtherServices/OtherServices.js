import React from 'react';
import styled from 'styled-components';

import camera from '../../assets/images/camera-icon.png';
import calc from '../../assets/images/calc-icon.png';
import card from '../../assets/images/card-icon.png';

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 40vh;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    margin: 20px;
    color: ${({ theme }) => theme.colors.black};
  }

  h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: ${({ theme }) => theme.fontWeight.m};
    text-align: center;
  }
`;

const StyledImg = styled.img`
  width: 40%;
`;

const OtherServices = () => {
  return (
    <Wrapper>
      <StyledContent>
        <StyledDiv>
          <StyledImg src={card} alt="camera" />
          <h2>Benchmarks</h2>
          <h3>
            See how you stack up against comparable companies in similar stages.
          </h3>
        </StyledDiv>
        <StyledDiv>
          <StyledImg src={calc} alt="camera" />
          <h2>Pricing Audit</h2>
          <h3>
            Benchmark the health of your monetization and pricing strategy.
          </h3>
        </StyledDiv>
        <StyledDiv>
          <StyledImg src={camera} alt="camera" />
          <h2>Retention Audit</h2>
          <h3>
            Audit where revenue leakage exists and where you can increase
            retention.
          </h3>
        </StyledDiv>
      </StyledContent>
    </Wrapper>
  );
};

export default OtherServices;
