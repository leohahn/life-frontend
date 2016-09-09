import React from 'react'
import LifeNavbar from 'containers/LifeNavbar'

class AppLayout extends React.Component {
  render () {
    return (
      <div>
        <LifeNavbar/>
        {this.props.children}
      </div>
    )
  }
}

export default AppLayout
