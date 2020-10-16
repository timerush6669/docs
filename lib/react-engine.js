const babel = require('@babel/core')
const React = require('react')
const { renderToString } = require('react-dom/server')
const mdx = require('@mdx-js/mdx')
const { MDXProvider, mdx: createElement } = require('@mdx-js/react')
const BlueContent = require('../dist/react/BlueContent')
const RedContent = require('../dist/react/RedContent')
const Timer = require('../dist/react/Timer')

const transform = code =>
  babel.transform(code, {
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }).code

const renderReact = async componentStr => {
  const jsx = await mdx(componentStr, { skipExport: true })
  const component = transform(jsx)
  const scope = { mdx: createElement }

  /* eslint-disable-next-line */
  const fn = new Function(
    'React',
    ...Object.keys(scope),
    `${component}; return React.createElement(MDXContent)`
  )

  const element = fn(React, ...Object.values(scope))

  // All components that we want accessible to markdown files must
  // be registered here
  const components = {
    BlueContent,
    RedContent,
    Timer
  }

  const elementWithProvider = React.createElement(
    MDXProvider,
    { components },
    element
  )

  return renderToString(elementWithProvider)
}

module.exports = renderReact
