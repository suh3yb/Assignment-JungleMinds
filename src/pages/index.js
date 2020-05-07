import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <CardsContainer>
        {data.swapi.allFilms.map(film => {
          return (
            <Card
              key={film.title}
              title={film.title}
              director={film.director}
              date={film.releaseDate}
              url={film.id.toString()}
            />
          );
        })}
      </CardsContainer>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    swapi {
      allFilms(orderBy: episodeId_ASC) {
        title
        director
        episodeId
        id
        releaseDate
      }
    }
  }
`;
