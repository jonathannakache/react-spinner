import React, { Component } from 'react'
import './App.css';
import Spinner from './components/Spinner';

  
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }

  }


  
  render() {

    return (
      <div className="App">



        <Spinner />
      </div>
    )
  }
}

export default App
