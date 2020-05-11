const path = require(`path`);
const slash = require(`slash`);
const stringToSlug = require('./src/helpers/stringToSlug');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  try {
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

    if (result.errors) {
      console.error(result.errors);
      reporter.panicOnBuild(
        `Error while running GraphQL query from gatsby-node.js.`
      );
      throw new Error('Error while running GraphQL query from gatsby-node.js.');
    }

    const { allFilms } = result.data.swapi;

    const pageTemplate = path.resolve(`./src/templates/film.js`);
    allFilms.forEach(film => {
      createPage({
        path: `/films/${stringToSlug(film.title)}/`,
        component: slash(pageTemplate),
        context: {
          id: film.id,
        },
      });
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
