import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: block;
  width: 124px;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: #ddcbe5;
  text-shadow: 0px 0px 8px rgb(210, 132, 244);
  transition-duration: 250ms;
  padding: 14px;
  border-radius: 12px;
  background: #54007b;
  outline: 2px solid #b300ff;
  outline-offset: -6px;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 0px 18px #7d26a2;
    outline: 4px solid #b300ff;
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
  text-shadow: 0px 0px 8px #f3e9f7;
  transition-duration: 250ms;
  padding: 14px;
  border-radius: 12px;
  background: #9540bc;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 0px 18px #f3e9f7;
    outline: 2px solid #f3e9f7;
    outline-offset: -6px;
  }
`;
