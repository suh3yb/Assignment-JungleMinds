import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

import Image from '../components/Image';

const Container = styled.div`
  border-radius: 5px;
  margin: 0 30px 30px;
  padding: 30px;
  min-height: 400px;
  max-width: ${props => (props.fullPage ? '900px' : '400px')};
  width: ${props => (props.fullPage ? '80%' : '400px')};
  background: white;
  color: black;
  box-shadow: 0 2px 5px black;
  transition: all 0.1s ease-in;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 10px black;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 20px 0;
`;

const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const HeadingSmall = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 20px;
`;

const Card = ({
  imageFileName,
  url,
  title,
  director,
  characters,
  date,
  fullPage,
}) => {
  return (
    <Link to={`/${url}`}>
      <Container fullPage={fullPage}>
        {fullPage && <P>Click to go HomePage</P>}
        <Image fileName={imageFileName} />
        <Title>{title}</Title>
        <Heading>Director: {director}</Heading>
        <Heading>Released: {moment(date).format('D MMM YYYY')}</Heading>
        {characters && (
          <>
            <HeadingSmall>Characters</HeadingSmall>
            <List>
              {characters.map(character => {
                return (
                  <ListItem key={character.name}>{character.name}</ListItem>
                );
              })}
            </List>
          </>
        )}
      </Container>
    </Link>
  );
};

export default Card;
