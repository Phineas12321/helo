import React from 'react'
import Nav from './components/Nav/Nav'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'
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
        <Nav/>
        <Auth/>
        <Dashboard/>
        <Form/>
        <Post/>
      </div>
    )
  }
  
}

export default App;
