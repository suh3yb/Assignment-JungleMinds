import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import SearchInput from '../components/SearchInput';
import CardsContainer from '../components/card/CardsContainer';
import Card from '../components/card/Card';
import CardContent from '../components/card/CardContent';
import PageNav from '../components/PageNav';

const StarshipsPage = ({ data }) => {
  const DISPLAY_COUNT = 8;
  const [shipsToDisplay, setShipsToDisplay] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(
    Math.ceil(data.swapi.allStarships.length / DISPLAY_COUNT)
  );

  useEffect(() => {
    if (searchInput) {
      const filteredShips = data.swapi.allStarships.filter(starship =>
        starship.name.toLowerCase().includes(searchInput)
      );
      setShipsToDisplay(
        filteredShips.slice(
          (currentPage - 1) * DISPLAY_COUNT,
          currentPage * DISPLAY_COUNT
        )
      );
      setPageCount(Math.ceil(filteredShips.length / DISPLAY_COUNT));
    } else {
      setCurrentPage(1);
      setShipsToDisplay(
        data.swapi.allStarships.slice(
          (currentPage - 1) * DISPLAY_COUNT,
          currentPage * DISPLAY_COUNT
        )
      );
      setPageCount(Math.ceil(data.swapi.allStarships.length / DISPLAY_COUNT));
    }
  }, [currentPage, searchInput, data.swapi.allStarships]);

  const handleInputChange = event => {
    setSearchInput(event.target.value);
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
