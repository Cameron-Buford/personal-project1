import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import routes from './routes'
import Nav from './Components/Nav'

class App extends Component{
  constructor(){
    super()
    this.state = {
     

    }
  }

  

  render(){
    return(
      <div>
        <Nav/>
        {routes}
       
        
        </div>
    )
  }
}





export default App;
