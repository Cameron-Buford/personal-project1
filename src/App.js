import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import routes from './routes'
import Nav from './Components/Nav'
import Footer from './Components/Footer'



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

class App extends Component{
  constructor(){
    super()
    this.state = {
     

    }
  }

  

  render(){
    return(
      <div style = {backbody}>
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
