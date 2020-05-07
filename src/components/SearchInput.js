import React from 'react';
import styled from 'styled-components';

const InputField = styled.input.attrs(props => {
  return { placeholder: `Search for ${props.searchFor}` };
})`
  display: block;
  width: 60%;
  height: 50px;
  margin: 0 auto 30px auto;
  padding: 0 30px;
  font-size: 24px;
  text-align: center;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:focus {
    outline-color: orange;
  }
`;

const SearchInput = ({ searchFor, value, onChange }) => {
  return <InputField searchFor={searchFor} value={value} onChange={onChange} />;
};

export default SearchInput;
