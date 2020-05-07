import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 30px;
  min-height: 400px;
  max-width: ${props => (props.fullPage ? '900px' : '400px')};
  width: ${props => (props.fullPage ? '80%' : '400px')};
  background: white;
  color: black;
  box-shadow: 0 2px 5px black;
  transition: all 0.1s ease-in;
  cursor: ${props => (props.url ? 'pointer' : 'inherit')};
  display: inline-block;
  text-align: center;

  &:hover {
    box-shadow: ${props =>
      props.url ? '0 4px 10px black' : '0 2px 5px black'};
  }
`;

const Card = ({ url, fullPage, children }) => {
  return url ? (
    <Link to={url}>
      <Container fullPage={fullPage} url={url}>
        {children}
      </Container>
    </Link>
  ) : (
    <Container fullPage={fullPage}>{children}</Container>
  );
};

export default Card;
