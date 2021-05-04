import styled from 'styled-components';
import { theme } from '../../style/theme';

export const ButtonMain = styled.button`
  width: 210px;
  height: 60px;
  padding: 8px 20px;
  background-color: ${({ theme, orange }) =>
    orange ? theme.colors.darkOrange : theme.colors.darkBlue};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.l};
  border-radius: 10px;
  font-size: 17px;
`;
