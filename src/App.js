import './App.css';
import React from 'react';
import {MainContainer} from './components/MainContainer'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div className="App">
      <MainContainer />
      </div>
    )
  }
}

export default App;
