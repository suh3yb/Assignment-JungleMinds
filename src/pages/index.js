import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import SearchInput from '../components/SearchInput';
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
  const [filmsToDisplay, setFilmsToDisplay] = useState(data.swapi.allFilms);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (searchInput) {
      const filteredFilms = data.swapi.allFilms.filter(film =>
        film.title.toLowerCase().includes(searchInput)
      );
      setFilmsToDisplay(filteredFilms);
    } else {
      setFilmsToDisplay(data.swapi.allFilms);
    }
  }, [searchInput, data.swapi.allFilms]);

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <SearchInput
        searchFor="Films"
        value={searchInput}
        onChange={handleChange}
      />
      <CardsContainer>
        {filmsToDisplay.map(film => {
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
