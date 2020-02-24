import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import routes from './routes'
import Nav from './Components/Nav'
import Footer from './Components/Footer'


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
       {/* <Footer/> */}
        </div>
        </div>
    )
  }
}





export default App;
