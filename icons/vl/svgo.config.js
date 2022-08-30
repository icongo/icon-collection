const { detachNodeFromParent } = require('svgo/lib/xast.js');
module.exports = {
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeMetadata',
    'removeEditorsNSData',
    {
      name: 'removeElementPgf',
      type: 'visitor',
      active: true,
      fn() {
        return {
          element: {
            enter: (node, parentNode) => {
              if (node.attributes) {
                Object.keys(node.attributes).forEach((keyname) => {
                  if (/(xmlns:(!?\w+))|(xml:space)|(i:\w+)/.test(keyname) && !/(xmlns:xlink)/.test(keyname)) {
                    delete node.attributes[keyname];
                  }
                });
              }
              if (/^i:(pgfRef|pgf)/.test(node.name)) {
                detachNodeFromParent(node, parentNode);
              }
            },
          },
        }
      }
    },
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
    'removeStyleElement',
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepDataAttrs: false
      }
    },
    'convertPathData',
    'cleanupIDs',
    'collapseGroups',
    {
      name: 'removeCommentsAll',
      type: 'visitor',
      active: true,
      fn() {
        return {
          comment: {
            enter: (node, parentNode) => {
              detachNodeFromParent(node, parentNode);
            },
          },
        }
      }
    }
  ],
}