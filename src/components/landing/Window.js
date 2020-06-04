import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
  border: 4px solid white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  transition: all 0.5s ease;
  text-align: center;
  margin: 10px 20px;
  cursor: pointer;
  overflow: hidden;
  font-family: sans;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0;
  transform: scale(0.8);
  animation: appear 2s ${({ delay }) => `1.${delay}`}s forwards
      cubic-bezier(0, 0, 0.33, 2),
    heart-beat 3s 4s infinite ease-in-out;

  @keyframes appear {
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes heart-beat {
    50% {
      border-color: rgb(246, 226, 55);
    }

    to {
      border-color: white;
    }
  }
`;

const Window = ({ episode, link, onHover }) => {
  const ROMAN_NUMERALS = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
  };

  return (
    <Container
      to={link}
      delay={episode}
      onMouseEnter={() => onHover(episode)}
      onMouseLeave={() => onHover(null)}
    >
      {ROMAN_NUMERALS[episode]}
    </Container>
  );
};

export default Window;
