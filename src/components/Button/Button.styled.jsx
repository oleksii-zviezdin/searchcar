import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  width: 10%;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: #ddcbe5;
  text-shadow: 0px 0px 8px #d284f4;
  transition-duration: 250ms;
  padding: 14px;
  border-radius: 12px;
  background: #54007b;
  outline: 3px solid #b300ff;
  outline-offset: -4px;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 0px 18px #7d26a2;
    outline: 3px solid #b300ff;
    outline-offset: 4px;
  }
`;

export const NavButton = styled(NavLink)`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: #f3e9f7;
  text-shadow: 0px 0px 8px #d284f4;
  transition-duration: 250ms;
  padding: 14px;
  border-radius: 12px;
  background: #9540bc;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 0px 18px #7d26a2;
    outline: 3px solid #b300ff;
    outline-offset: -4px;
  }
`;
