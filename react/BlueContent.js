const React = require('react')
const ReactDOM = require('react-dom')

const BlueContent = (props) => {
  return (
    <div className='react-component-blue-content' style={{ color: 'blue' }}>
      {props.children}
    </div>
  )
}

if (typeof window === 'undefined') {
} else {
  const componentContainers = document.querySelectorAll('.react-component-blue-content')

  for (const index of componentContainers) {
    const componentContainer = componentContainers[index]
    ReactDOM.hydrate(React.createElement(BlueContent), componentContainer)
  }
}

module.exports = BlueContent
