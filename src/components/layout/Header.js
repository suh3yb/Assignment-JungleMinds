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

  @media (max-width: 768px) {
    flex-direction: column;
    height: 180px;
    padding: 20px 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & .active {
    color: yellow;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const MenuItem = styled.div`
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
        <MenuItem>
          <Link to="/" activeClassName="active">
            <p>Films</p>
          </Link>
        </MenuItem>
        <Link to="/characters" activeClassName="active">
          <MenuItem>
            <p>Characters</p>
          </MenuItem>
        </Link>
        <Link to="/starships" activeClassName="active">
          <MenuItem>
            <p>Starships</p>
          </MenuItem>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
