const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/.cache/dev-404-page.js"))),
  "component---src-components-templates-artwork-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/components/templates/Artwork.js"))),
  "component---src-components-templates-project-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/components/templates/Project.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/pages/contact.js"))),
  "component---src-pages-design-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/pages/design.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/pages/index.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/src/pages/skills.js")))
}

