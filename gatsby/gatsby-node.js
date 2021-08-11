import path from 'path';

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTamlate = path.resolve('./src/templates/Project.js');
  const { data } = await graphql(`
    query {
      projects: allSanitySingleProject {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTamlate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnProjectsIntoPages(params);
}
