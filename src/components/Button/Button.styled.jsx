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
  text-shadow: 0px 0px 12px rgb(170, 167, 255);
  transition-duration: 250ms;
  padding: 14px;
  border-radius: 12px;
  background: #000a7b;
  outline: 2px solid #0004ff;
  outline-offset: -6px;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 0px 18px #0004ff;
    outline: 2px solid #0004ff;
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
  background: #030097;

  &:hover,
  &:active,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 0px 18px #f3e9f7;
    outline: 2px solid #f3e9f7;
    outline-offset: -6px;
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  width: 274px;
  padding: 12px 98px;
  margin-top: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  flex-shrink: 0;

  transition-duration: 250ms;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  cursor: pointer;

  &:focus,
  &:hover {
    background: #0b44cd;
  }
`;

export const LoadMore = styled.button`
  display: inline-block;
  margin-top: 100px;
  align-items: center;
  border: none;
  background: transparent;
  text-decoration: underline;
  cursor: pointer;

  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
