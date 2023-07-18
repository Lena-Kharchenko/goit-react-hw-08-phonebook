import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  box-shadow: 2px 1px 3px 0px rgba(0, 0, 0, 0.3);

  //   > nav {
  //     display: flex;
  //   }
`;

export const Logo = styled.p`
  font-weight: 700;
  color: rgb(35, 21, 237);
  font-size: 36px;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: rgb(39, 38, 38);
  font-weight: 600;
  font-size: 24px;

  &.active {
    color: rgb(35, 21, 237);
  }
`;
