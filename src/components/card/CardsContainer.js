import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DisplayPage = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
`;

const CardsContainer = ({ currentPage, pageCount, children }) => {
  return (
    <>
      {pageCount > 1 && (
        <DisplayPage>{`Page ${currentPage} of ${pageCount}`}</DisplayPage>
      )}
      <Container>{children}</Container>
    </>
  );
};

export default CardsContainer;
