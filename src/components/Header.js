import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #000000;
  margin-bottom: 30px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.nav`
  color: #eeeeee;
  font-size: 28px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <MenuItem>
          <p>Star Wars Films</p>
        </MenuItem>
      </Link>
    </Container>
  );
};

export default Header;
