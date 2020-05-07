import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Card from '../components/card/Card';
import CardContent from '../components/card/CardContent';

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CharactersPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Characters" />
      <CardsContainer>
        {data.swapi.allPersons.map(person => {
          return (
            <Card key={person.name}>
              <CardContent
                imageCategory="person"
                title={person.name}
                titleContentPairs={[
                  { title: 'Gender', content: person.gender },
                  { title: 'Birth Year', content: person.birthYear },
                ]}
              />
            </Card>
          );
        })}
      </CardsContainer>
    </Layout>
  );
};

export default CharactersPage;

export const pageQuery = graphql`
  query {
    swapi {
      allPersons {
        birthYear
        gender
        name
      }
    }
  }
`;
