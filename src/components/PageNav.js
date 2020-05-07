import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  margin-bottom: 30px;
  list-style: none;
  text-align: center;
`;

const PageItem = styled.li`
  display: inline-block;
  margin: 0 5px;
  padding: 10px 0;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 4px #cccccc;
  font-weight: 700;
  font-size: 22px;
  user-select: none;
`;

const PageNav = ({ pageCount, currentPage, clickHandler }) => {
  const [pageButtons, setPageButtons] = useState([]);
  const [leftDots, setLeftDots] = useState(false);
  const [rightDots, setRightDots] = useState(false);

  useEffect(() => {
    if (pageCount - currentPage > 2) {
      setRightDots(true);
    } else {
      setRightDots(false);
    }
    if (currentPage > 3) {
      setLeftDots(true);
    } else {
      setLeftDots(false);
    }

    let buttons = [];

    if (currentPage > 3 && currentPage + 2 <= pageCount) {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        buttons.push(
          <PageItem
            key={i}
            onClick={event => {
              clickHandler(parseInt(event.target.innerText));
            }}
          >
            {i}
          </PageItem>
        );
      }
    } else if (currentPage <= 3 && pageCount > 4) {
      for (let i = 1; i <= 5; i++) {
        buttons.push(
          <PageItem
            key={i}
            onClick={event => {
              clickHandler(parseInt(event.target.innerText));
            }}
          >
            {i}
          </PageItem>
        );
      }
    } else if (pageCount < 5) {
      for (let i = 1; i < pageCount; i++) {
        buttons.push(
          <PageItem
            key={i}
            onClick={event => {
              clickHandler(parseInt(event.target.innerText));
            }}
          >
            {i}
          </PageItem>
        );
      }
    } else {
      for (let i = pageCount; i > pageCount - 5; i--) {
        buttons.unshift(
          <PageItem
            key={i}
            onClick={event => {
              clickHandler(parseInt(event.target.innerText));
            }}
          >
            {i}
          </PageItem>
        );
      }
    }

    setPageButtons(buttons);
  }, [currentPage, pageCount, clickHandler]);

  return (
    <Container>
      {leftDots && (
        <PageItem
          onClick={() => {
            clickHandler(currentPage - 1);
          }}
        >
          {'<'}
        </PageItem>
      )}
      {pageButtons}
      {rightDots && (
        <PageItem
          onClick={() => {
            clickHandler(currentPage + 1);
          }}
        >
          {'>'}
        </PageItem>
      )}
    </Container>
  );
};

export default PageNav;
