import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Card from '../components/card/Card';
import CardContent from '../components/card/CardContent';

import stringToSlug from '../helpers/stringToSlug';

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
            <Card key={film.title} url={`/films/${stringToSlug(film.title)}`}>
              <CardContent
                clickable
                imageCategory="poster"
                imageFileName={film.episodeId.toString()}
                title={film.title}
                titleContentPairs={[
                  { title: 'Director', content: film.director },
                  {
                    title: 'Released',
                    content: moment(film.releaseDate).format('D MMM YYYY'),
                  },
                ]}
              />
            </Card>
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
        releaseDate
      }
    }
  }
`;
