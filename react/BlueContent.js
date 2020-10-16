const React = require('react')

const BlueContent = (props) => {
  return (
    <div style={{ color: 'blue' }}>
      {props.children}
    </div>
  )
}

module.exports = BlueContent
