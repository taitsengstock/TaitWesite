module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-modal-routing/gatsby-browser.js'),
      options: {"plugins":[],"appElement":"#___gatsby","modalProps":{"style":{"overlay":{"position":"fixed","top":0,"left":0,"right":0,"bottom":0,"backgroundColor":"rgba(103, 99, 99, 0.75)","display":"flex","justifyContent":"center"},"content":{"maxWidth":"800px","left":"auto","right":"auto","width":"100%","boxSizing":"border-box"}}}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
