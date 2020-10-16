const React = require('react')

const RedContent = (props) => {
  return (
    <div style={{ color: 'red' }}>
      {props.children}
    </div>
  )
}

module.exports = RedContent
