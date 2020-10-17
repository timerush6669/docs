const React = require('react')
const ReactDOM = require('react-dom')

const RedContent = (props) => {
  return (
    <div className='react-component-red-content' style={{ color: 'red' }}>
      {props.children}
    </div>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-red-content')

  for (const index of componentContainers) {
    const componentContainer = componentContainers[index]
    ReactDOM.hydrate(React.createElement(RedContent), componentContainer)
  }
}

module.exports = RedContent
