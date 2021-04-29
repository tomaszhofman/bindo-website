import React from 'react';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: ${({ orange }) => (orange ? '376px' : '330px')};
  height: ${({ orange }) => (orange ? '473px' : '441px')};
  background-color: ${({ theme, orange }) =>
    orange ? theme.colors.orange : theme.colors.lightGrey};
  border-radius: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  padding: 20px;
`;
