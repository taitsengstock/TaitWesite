import path from 'path';



async function turnProjectsIntoPages({ graphql, actions }) {
  // 1. Get a template
  const projectTemplate = path.resolve('./src/components/templates/Project.js');
  // 2. query all projects
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over all pizzas and creata page
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      // what is the url for this page
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // 1. Pizzas
  await turnProjectsIntoPages(params);

  // 2.Toppings
  // 3. slicemasters
  // 4.projects
}
