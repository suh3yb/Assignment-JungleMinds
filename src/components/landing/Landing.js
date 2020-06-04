import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Window from './Window';
import Logo from '../images/Logo';

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  width: 100vw;
  height: 100vh;
  padding: 100px;
  text-align: center;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 70px;
  opacity: 0;
  transform: scale(0.5);
  animation: appear 2s forwards cubic-bezier(0, 0, 0.33, 2);

  @keyframes appear {
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Landing = ({ data }) => {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    console.log(film);
  }, [film]);

  return (
    <Wrapper>
      <div>
        <ImgContainer>
          <Logo />
        </ImgContainer>
        <Flex>
          {data.map(movie => {
            return (
              <Window
                key={movie.episodeId}
                episode={movie.episodeId}
                link="/films/the-phantom-menace"
                onHover={setFilm}
              >
                {movie.title}
              </Window>
            );
          })}
        </Flex>
      </div>
    </Wrapper>
  );
};

export default Landing;
