import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import Card from '../components/card/Card';
import CardContent from '../components/card/CardContent';
import PageNav from '../components/PageNav';

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StarshipsPage = ({ data }) => {
  const DISPLAY_COUNT = 8;
  const pageCount = Math.ceil(data.swapi.allStarships.length / DISPLAY_COUNT);
  const [shipsToDisplay, setShipsToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setShipsToDisplay(
      data.swapi.allStarships.slice(
        (currentPage - 1) * DISPLAY_COUNT,
        currentPage * DISPLAY_COUNT
      )
    );
  }, [currentPage]);

  const pageNavClickHandler = pageNum => {
    setCurrentPage(pageNum);
  };

  return (
    <Layout>
      <SEO title="Characters" />
      <CardsContainer>
        {shipsToDisplay.map(starship => {
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
      <PageNav
        pageCount={pageCount}
        currentPage={currentPage}
        clickHandler={pageNavClickHandler}
      />
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
