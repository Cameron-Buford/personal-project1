import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import routes from './routes'
import Nav from './Components/Nav'


const dashboardStyle = {
  backgroundColor: '#333333', height: '100vh', width: '100%'

}

class App extends Component{
  constructor(){
    super()
    this.state = {
     

    }
  }

  

  render(){
    return(
      <div>
        <div styles={dashboardStyle}>
        <Nav/>
        {routes}
       
        </div>
        </div>
    )
  }
}





export default App;
