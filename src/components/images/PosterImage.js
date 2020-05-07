import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PosterImage = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "posters" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const imageToDisplay = data.allFile.edges.filter(image => {
    return image.node.base.split('.')[0] === fileName;
  })[0];

  return imageToDisplay ? (
    <Img
      fluid={imageToDisplay.node.childImageSharp.fluid}
      alt={imageToDisplay.node.base.split('.')[0]}
    />
  ) : null;
};

export default PosterImage;
