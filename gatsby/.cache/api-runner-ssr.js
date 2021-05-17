var plugins = [{
      plugin: require('/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"48u8yazd","dataset":"production","watchMode":true,"token":"skSRJUuJ1icojjC2wYFascg81Ld0QHNgZmcuAu3ZwFbY1yTX6vU1om4VQhtNi3TpTry8I1h2zlgZZXl7dJPlUq59NU8SSCpsyfA4KoF2WRTO9ihXbQIkzaDTnB3lLFY3wYu3csetrgcaS0rynvEAqTNwrWFnxIMETqnezx57r0PA3sjFGCKV"},
    },{
      plugin: require('/Users/taitsengstock/Documents/GitHub/TaitWesite/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
