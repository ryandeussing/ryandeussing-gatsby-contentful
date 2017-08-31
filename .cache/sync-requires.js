// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ryanaponte/repos/gatsby-contentful/.cache/dev-404-page.js")),
  "component---src-pages-image-api-js": preferDefault(require("/Users/ryanaponte/repos/gatsby-contentful/src/pages/image-api.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ryanaponte/repos/gatsby-contentful/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ryanaponte/repos/gatsby-contentful/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/ryanaponte/repos/gatsby-contentful/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/ryanaponte/repos/gatsby-contentful/.cache/json/layout-index.json"),
  "image-api.json": require("/Users/ryanaponte/repos/gatsby-contentful/.cache/json/image-api.json"),
  "layout-index.json": require("/Users/ryanaponte/repos/gatsby-contentful/.cache/json/layout-index.json"),
  "index.json": require("/Users/ryanaponte/repos/gatsby-contentful/.cache/json/index.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/ryanaponte/repos/gatsby-contentful/.cache/layouts/index.js"))
}