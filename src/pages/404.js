import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const Container = styled.div`
  text-align: center;
  color: #000000;
`;

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="Page not found" />
      <Container>
        <Link to="/">
          <h1>Page Not Found. Click here to go HomePage</h1>
        </Link>
      </Container>
    </Layout>
  );
};

export default PageNotFound;
