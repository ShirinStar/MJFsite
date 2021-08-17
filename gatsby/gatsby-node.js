import path from 'path';

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/Project.js');
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
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

async function turnTagsIntoPages({ graphql, actions }) {
  const tagsTemplate = path.resolve('./src/pages/projects.js');
  const { data } = await graphql(`
    query {
      tags: allSanityTag {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.tags.nodes.forEach((tag) => {
    actions.createPage({
      path: `tags/${tag.name}`,
      component: tagsTemplate,
      context: {
        tag: tag.name,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([turnProjectsIntoPages(params), turnTagsIntoPages(params)]);
}
