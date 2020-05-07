import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import SearchInput from '../components/SearchInput';
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
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(
    Math.ceil(data.swapi.allPersons.length / DISPLAY_COUNT)
  );

  useEffect(() => {
    if (searchInput) {
      const filteredCharacters = data.swapi.allPersons.filter(person =>
        person.name.toLowerCase().includes(searchInput)
      );
      setPeopleToDisplay(
        filteredCharacters.slice(
          (currentPage - 1) * DISPLAY_COUNT,
          currentPage * DISPLAY_COUNT
        )
      );
      setPageCount(Math.ceil(filteredCharacters.length / DISPLAY_COUNT));
    } else {
      setPeopleToDisplay(
        data.swapi.allPersons.slice(
          (currentPage - 1) * DISPLAY_COUNT,
          currentPage * DISPLAY_COUNT
        )
      );
    }
  }, [currentPage, searchInput, data.swapi.allPersons]);

  const handleInputChange = event => {
    setSearchInput(event.target.value);
  };

  const pageNavClickHandler = pageNum => {
    setCurrentPage(pageNum);
  };

  return (
    <Layout>
      <SEO title="Characters" />
      <SearchInput
        searchFor="Characters"
        value={searchInput}
        onChange={handleInputChange}
      />
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
        pageCount={pageCount}
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
