import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import LifeNavbar from 'containers/LifeNavbar'

class AppLayout extends React.Component {
  render () {
    return (
      <div>
        <LifeNavbar pathname={this.props.location.pathname}/>
        <div className="container">
          {this.props.children}
        </div>
        <ReduxToastr
          timeOut={3000}
          newestOnTop={true}
          position="bottom-right"
        />
      </div>
    )
  }
}

export default AppLayout
