import React from 'react'
import {withRouter} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import routes from './routes'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return (
      <div className='App'>
        {this.props.location.pathname === '/' ? (
          <>
            {routes}
          </>
        ) : (
          <>
          <div className='app-nav'> 
            <Nav/>
          </div>
            {routes}
          </>
        )}
      </div>
    )
  }
  
}

export default withRouter(App);
