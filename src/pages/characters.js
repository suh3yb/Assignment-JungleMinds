import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import SearchInput from '../components/SearchInput';
import CardsContainer from '../components/card/CardsContainer';
import Card from '../components/card/Card';
import CardContent from '../components/card/CardContent';
import PageNav from '../components/PageNav';

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
      setPageCount(Math.ceil(data.swapi.allPersons.length / DISPLAY_COUNT));
    }
  }, [currentPage, searchInput, data.swapi.allPersons]);

  const handleInputChange = event => {
    setSearchInput(event.target.value);
    if (event.target.value === '') {
      setCurrentPage(1);
    }
  };

  const pageNavClickHandler = pageNum => {
    if (pageNum !== currentPage) {
      setCurrentPage(pageNum);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Layout>
      <SEO title="Characters" />
      <SearchInput
        searchFor="Characters"
        value={searchInput}
        onChange={handleInputChange}
      />
      <CardsContainer currentPage={currentPage} pageCount={pageCount}>
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
