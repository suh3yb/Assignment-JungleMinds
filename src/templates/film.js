import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Card from '../components/card/Card';
import CardContent from '../components/card/CardContent';

const Container = styled.div`
  text-align: center;
`;

const Film = ({ data }) => {
  const film = data.swapi.Film;
  return (
    <Layout>
      <SEO title={film.title} />
      <Container>
        <Card fullPage>
          <CardContent
            imageCategory="poster"
            imageFileName={film.episodeId.toString()}
            title={film.title}
            titleContentPairs={[
              { title: 'Director', content: film.director },
              {
                title: 'Released',
                content: moment(film.releaseDate).format('D MMM YYYY'),
              },
              { title: 'Opening Crawl', content: film.openingCrawl },
            ]}
            characterList={film.characters}
          />
        </Card>
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
