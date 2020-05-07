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

const StarshipsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Characters" />
      <CardsContainer>
        {data.swapi.allStarships.map(starship => {
          return (
            <Card key={starship.name}>
              <CardContent
                imageCategory="starship"
                title={starship.name}
                titleContentPairs={[
                  { title: 'Class', content: starship.class },
                  { title: 'Manufacturer', content: starship.manufacturer },
                  {
                    title: 'Cargo Capacity',
                    content: starship.cargoCapacity || 'Unknown',
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

export default StarshipsPage;

export const pageQuery = graphql`
  query {
    swapi {
      allStarships {
        name
        crew
        class
        cargoCapacity
        manufacturer
      }
    }
  }
`;
