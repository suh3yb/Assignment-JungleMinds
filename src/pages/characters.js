import React, { useState, useEffect, useRef } from 'react';
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

const CharactersPage = ({ data }) => {
  const DISPLAY_COUNT = 8;
  const [peopleToDisplay, setPeopleToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPeopleToDisplay(
      data.swapi.allPersons.slice(
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
        {peopleToDisplay.map(person => {
          return (
            <Card key={person.name}>
              <CardContent
                imageCategory="person"
                title={person.name}
                titleContentPairs={[
                  { title: 'Gender', content: person.gender },
                  {
                    title: 'Birth Year',
                    content: person.birthYear || 'Unknown',
                  },
                ]}
              />
            </Card>
          );
        })}
      </CardsContainer>
      <PageNav
        pageCount={data.swapi.allPersons.length / DISPLAY_COUNT}
        currentPage={currentPage}
        clickHandler={pageNavClickHandler}
      />
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
