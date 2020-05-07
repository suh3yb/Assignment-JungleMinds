import React, { Fragment } from 'react';
import styled from 'styled-components';

import PosterImage from '../images/PosterImage';
import PersonImage from '../images/PersonImage';
import StarshipImage from '../images/StarshipImage';

const Title = styled.h1`
  font-size: 32px;
  margin: 20px 0;
`;

const Heading = styled.h2`
  font-size: 24x;
  margin-bottom: 10px;
`;

const HeadingSmall = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  font-size: 20px;
`;

const SmallP = styled.p`
  font-size: 14px;
  margin: 20px 0;
`;

const Card = ({
  imageCategory,
  imageFileName,
  title,
  titleContentPairs,
  characterList,
  clickable,
}) => {
  return (
    <>
      {imageCategory === 'poster' && imageFileName && (
        <PosterImage fileName={imageFileName} />
      )}
      {imageCategory === 'person' && <PersonImage />}
      {imageCategory === 'starship' && <StarshipImage />}
      <Title>{title}</Title>
      {titleContentPairs &&
        titleContentPairs.map((pair, index) => {
          return (
            <Fragment key={index}>
              <Heading>{pair.title}</Heading>
              <P>{pair.content}</P>
            </Fragment>
          );
        })}
      {characterList && (
        <>
          <HeadingSmall>Characters</HeadingSmall>
          <List>
            {characterList.map((character, index) => {
              return <ListItem key={index}>{character.name}</ListItem>;
            })}
          </List>
        </>
      )}
      {clickable && <SmallP>Click for more details...</SmallP>}
    </>
  );
};

export default Card;
