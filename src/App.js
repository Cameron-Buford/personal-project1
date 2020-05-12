import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import routes from './routes'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Auth from './Components/Auth'
import Register from './Components/Register'



const backbody= {
  backgroundImage: 'url(https://lh3.googleusercontent.com/b6OP4BGfmLvt7ZZ93baSyE_m4d8-tdEsQc8wXl0RD-w02H77AbJS-XRDoA423JuJt4USXHeLKIpqvytUlUFMNxAc-Lmgnx1MyQFE6u7NfrqzoLjVWsVLDw5M3pUZdlLiP9170c2W2agkpexVUPDEI0BlhNSq2lbMJQQI1yrzEVii3icdRSCmeX3kixEAClioOheMsI0cHe-Q9f26tbsOr-quIEKm1xZ-f7jzN7A8ndU39x6fRbjvrT8zGFaDasIiCOGPG3zE701Pj_Mq32zVa1nNWPuMyniCxrHqMRAyF1NvlDsMjF-q7jeBEgJFlmYaBH3k0ffJR9w9p6fwmQ9i-pJB6SceX8sTv6W0olC6GRrJnsmJsc6eVtUxPRc6NH_2cxqtTSmjeUFnHXV_Ic0GD4e8F7wEZ4vX6_usZiRotTr7iIaJHsdifP10Z59KiM4lWDVxP0A_9nPMNz3QJYiDHHoeQgYNDa2zeM2nIaC0sJDcTOJWd-4QFrPx2KDleC5Y9EuOMDROik1evrE-5DGHg-V60z6LRl3H3KNKzqpk6OAssJGURAK1MDNjuTv3Ib-5H9Zg8SJr7zLIhtjjm9k4atXKWyx_crQ7elXief5sdt7pOqguHFr8a8GOd_uXnjXTtCrDzrg5nijU0RzYF870ILEq9uTRRgkDG83eNCFFDtQl-vI0rji4NPwd=w986-h657-no)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'

}


const dashboardStyle = {
  backgroundColor: '#333333', height: '100vh', width: '100%'

}
const titleContainer = {
  // backgroundColor: 'yellow',
  height: '200px',
  display: 'flex',
  alignItems: 'baseline',
  height: '100px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(48, 45, 45)',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'center',
  /* color: #f2f2f2; */
  color: 'rgb(218, 203, 203)',
}

const title = {
  // backgroundColor:'blue',
  fontSize: '55px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'baseline',
  textDecoration: 'underline overline'
  

}

class App extends Component{
  constructor(){
    super()
    this.state = {
      pathname: '',
      location: ''
     

    }
  }

  

  render(){
    // const pathname = this.props.location.pathname
    // console.log(pathname)
    // if(pathname !== '/auth'){
       
    // }
    console.log('hit')
    return(
      <div style = {backbody}>
        <div styles={dashboardStyle}>

        <div>
          {/* {pathname === '/auth' ?
            <div></div>
            : */}
          <div style= {titleContainer}>
            <div style = { title }> TRAINING HQ </div>
          </div>
        {/* // } */}
        </div>

          <Nav/>
          {routes}
       {/* <Footer/> */}
        </div>
      </div>
    )
   }
  }
// }





export default App;
