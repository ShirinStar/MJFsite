// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-press-js": () => import("./../../../src/pages/press.js" /* webpackChunkName: "component---src-pages-press-js" */),
  "component---src-pages-projects-js": () => import("./../../../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-reels-js": () => import("./../../../src/pages/reels.js" /* webpackChunkName: "component---src-pages-reels-js" */),
  "component---src-pages-values-js": () => import("./../../../src/pages/values.js" /* webpackChunkName: "component---src-pages-values-js" */),
  "component---src-templates-project-js": () => import("./../../../src/templates/Project.js" /* webpackChunkName: "component---src-templates-project-js" */)
}

