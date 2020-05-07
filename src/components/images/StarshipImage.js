import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PersonImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "starship.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} alt="person" />;
};

export default PersonImage;
