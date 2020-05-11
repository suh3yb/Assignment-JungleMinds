/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);
const stringToSlug = require('./src/helpers/stringToSlug');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      swapi {
        allFilms {
          id
          title
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    console.error(result.errors);
    reporter.panicOnBuild(
      `Error while running GraphQL query from gatsby-node.js.`
    );
    return;
  }

  console.log('aldkfjladjf;adfja;dlfksja;sdflkj;adlfkja;flkjdsa;lfkj');

  // Access query results via object destructuring
  const { allFilms } = result.data.swapi;

  const pageTemplate = path.resolve(`./src/templates/film.js`);
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allFilms.forEach(film => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/films/${stringToSlug(film.title)}/`,
      component: slash(pageTemplate),
      context: {
        id: film.id,
      },
    });
  });
};
