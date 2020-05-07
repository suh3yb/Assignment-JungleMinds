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
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  color: #eeeeee;
  font-size: 24px;
  font-weight: 700;
  margin: 0 10px;
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <MenuItem>
          <p>Star Wars Films</p>
        </MenuItem>
      </Link>
      <Nav>
        <Link to="/">
          <MenuItem>
            <p>Films</p>
          </MenuItem>
        </Link>
        <Link to="/characters">
          <MenuItem>
            <p>Characters</p>
          </MenuItem>
        </Link>
        <Link to="/starships">
          <MenuItem>
            <p>Starships</p>
          </MenuItem>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
