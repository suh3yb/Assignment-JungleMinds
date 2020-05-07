import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';

const Container = styled.div`
  text-align: center;
`;

const Film = ({ data }) => {
  const film = data.swapi.Film;
  return (
    <Layout>
      <SEO title={film.title} />
      <Container>
        <Card
          fullPage
          url={''}
          title={film.title}
          director={film.director}
          date={film.releaseDate}
          characters={film.characters}
        />
      </Container>
    </Layout>
  );
};

export default Film;

export const pageQuery = graphql`
  query($id: ID!) {
    swapi {
      Film(id: $id) {
        title
        director
        episodeId
        releaseDate
        openingCrawl
        characters {
          name
        }
      }
    }
  }
`;
