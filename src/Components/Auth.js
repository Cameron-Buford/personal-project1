// import React, {Component} from 'react'
// import axios from 'axios'


// class Auth extends Component{
//     constructor(){
//         super()
//         this.state ={
//             username: '',
//             password: '',
//             loginToggle: true

//         }
//     }


//     //make the login button turn to a welcome sign when logged in instead of staying alogin button

//     register = (username, password) => {
//         axios.post('/auth/register', {username, password})
//         .then(res => {
//             console.log(res)
//             this.props.history.push('/')
//         })
//     }

//     login = (username, password) => {
//         axios.post('/auth/login', {username, password})
//         .then(res => {
//             console.log(res)
//             this.props.history.push('/')
//         })
//     }

//     handleChange = e => {
//         const {name, value} = e.target;
//         this.setState({
//             [name]: value
//         })
//     }

//     render(){
//         const {username, password} = this.state;
//         return(
//             <div>Auth
//                 <div>
//                     <div>
//                         <p>{'usernman'}</p>
//                         <input
//                             name= 'username'
//                             value={this.state.username}
//                             placeholder= 'username'
//                             onChange= {e => this.handleChange(e)}
//                             />
//                     </div>

//                     <div>
//                         <p>{'Password'}</p>
//                         <input
//                             name= 'password'
//                             value={this.state.password}
//                             placeholder= 'password'
//                             onChange= {e => this.handleChange(e)}
//                             />

//                             <button onClick={() => this.login(username, password)}>login</button>
//                             <button onClick= {() => this.register(username, password)}>register</button>
//                     </div>


//                 </div>

//             </div>
//         )
//     }
// }

// export default Auth




import React, { useState } from "react"
import axios from "axios"
import {withRouter} from 'react-router-dom'
import {getUser} from '../Duxx/reducer'
import {connect} from 'react-redux'


//background
    //dimensions
    //flex positioning
    //other positioning
    //font


const drillBody = {
    //background
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    //dimensions
    height: '100vh', 
    width: '100%',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    // flexDirection: 'column',
    justifyContent: 'center'


  // backgroundImage: 'url(https://lh3.googleusercontent.com/ci3o9i4XuCoFLaWtp09FhrB4AvN7WBAHqzcpaW16OStTZLNIlPZtFuNrQD2xdi9E42lNtIf225Jrl9c3kikpIifRdmdken1zTPED-a5VLNZKrAl-MZpr5HU3jJ5zRcZSRsyh2go78-EVO2Q2ILcvoyCV1XcH7Z9F7fOEqrbiAaY4NMrkpMNPTkDwE4qK0pssEJ3xIVT5Oy81YKB6O3cXKJorfew8b0_DFahpnKIXkmYu2ULq6Wwt1dI-kLdbeaSdn-H1JXmBfsqHVHDJ1T4f-PiO1wGaB-YYwpiIVBId2CTJ41_8n9PYwX-Wd_Be-0zU_sqrSXZw3QljQYjUZvCUcfkygAyAhoO9Wr_FZLPPNfvUowJaJkGCxDDgcANFPOFGLJZEOMRSil1mIXTjRpe8e51LH_Km1E6eGj8zGeR-ptsszX2io1Lc7yVF7Arhb6Dt2OO7SNmi5MWDt3f0fyBNE8LHbB2ZsylaTzEibS_-H5pLfTSkqGEsw1rQZVVT_DZr0K9kRkXg64rCriip-S-9ccdU8b5IOa9YiZ63UtEb_fS0C-z8JIhwFrh5PrIOTq3fdKpWv7GSelDwNHL0j7KPmgmiZi4OGzXkzYHrL3PhlJ3yT9z7jEE7Rx_5JYwstAwV-RHwk9AA-w3n4rLTP6_ssbWI5u1LbhYzU47giuCleOSzP2QMgZGjNUo=w1172-h657-no)',
  // backgroundColor: '#333333', 


}

const leftBox = {
    //background
    backgroundColor: 'transparent',
    //dimensions
    minHeight: '600px',
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    //font
    color: 'white',
    // fontWeight: 'bold',
    fontSize: '45px'
}

const leftJoin = {
  //background
  backgroundColor: 'transparent',
  //dimensions
  height: '50px',
  //flex positioning
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  //other positioning
  //font
  color: 'white',
  fontSize: '45px',
  fontWeight: 'bold'
  
}

const hr = {
  border: '4px solid white',
  width: '400px',
}

const loginbox = {
    //background
    backgroundColor: 'white',
    // backgroundColor: 'rgba(117, 111, 111, 0.9)',
    //dimensions
    width: '400px',
    minHeight: '600px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    borderRadius: '12px'
    //font
  
  
}

const loginTitle = {
  //font
  fontSize: '35px',
  fontWeight: 'bold'
}

const authBox = {
    //background
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(179, 157, 37, 0.3)',
    //dimensions
    width: '390px',
    height: '100px',
    //flex positioning
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    //other positioning
    borderRadius: '12px',
    //font
    fontSize: '25px',
    fontWeight: '15px',
    color: 'white'


  // backgroundColor: 'transparent',
  // margin: '10px'
}

const inputStyle = {
    //background
    backgroundColor: 'rgb(219, 203, 203)',
    //dimensions
    width: '300px',
    height: '50px',
    borderRadius: '8px',
    //flex positioning

    //other positioning

    //font
    fontSize: '25px'
  

}



const infoBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  fontWeight: 'bold',
  margin: '10px',
  borderRadius: '12px'

}

const registerButton = {
  backgroundColor: '#CD2027',
  color: '#FFFFFF',
  width: '150px',
  borderRadius: '12px',
  fontWeight: 'bold',
  border: 'none',
}

const loginButton = {
  //background
  backgroundColor: '#CD2027',
    //dimensions
    width: '250px',
    height: '50px',
    //flex positioning
    //other positioning
    border: 'none',
    //font
  color: '#FFFFFF',
  borderRadius: '8px',
  fontWeight: 'bold',
}

const toRegister = {
  color: 'blue',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '18px',
  fontWeight: 'bold'
}

const backhomeButton = {
  backgroundColor: 'transparent',
  borderRadius: '12px',
  fontWeight: 'bold',
  border: 'none'
}



const Auth = ({history, getUser}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  


  const register = () => {
    axios.post("/auth/register", { username, password, email }).then(results => {
      history.push("/")
    })
  }


  const login = () => {
    axios.post("/auth/login", { username, password, email }).then(results => {
      getUser(results.data)
      history.push("/")
    })
  }

  


  return (
    <div style= {drillBody}>

      <div style= {leftBox}> 
        <div style= {leftJoin}>JOIN TODAY 
          <hr style= {hr}></hr>
        </div>
        <div style= {authBox}>
          Join the community today and start your journey of learning from trusted and experienced gunfighters who will teach you no gimmicks skills that will preserve your life in an armed conflict.  Join us now by registering below.  See you on the range!
        </div>

      </div>


        <div style= {loginbox}> 
          <div style= {loginTitle}>LOG IN</div>
            <div style= {infoBox}> 
                <p>{'USERNAME:'}</p>
                <input
                        style = {inputStyle}
                        name="username"
                        value={username}
                        placeholder ="username"
                        onChange={e => setUsername(e.target.value)}
                ></input>
            </div>

            <div style= {infoBox}>
                <p>{'PASSWORD:'}</p>
                <input
                        style = {inputStyle}
                        type= "password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                ></input>
            </div >
            <p>Forgot Password?</p>





            {/* <div style= {infoBox}>
                <p>{'EMAIL:'}</p>
                <input
                  style = {inputStyle}
                  name="email"
                  value={email}
                  placeholder="email"
                  onChange={e => setEmail(e.target.value)}>
                </input>
            </div> */}
            <button
                style= {loginButton}
                onClick = {() => login()}
                >Log in
            </button>
            <div>
              Don't have an account? Register
              <button
                style= {toRegister} 
                onClick= {() => history.push('/register')}
              >HERE</button>
            </div>
            {/* <button
                style= {registerButton}
                onClick = {() => register()}
                >Register
            </button> */}
            <button 
              style= {backhomeButton}  
              className='homebutton'    
              onClick={() => history.push('/')}>
                Take Me Back To HQ Home
            </button>
        </div>
    </div>
  )
}
export default connect(null, {getUser})(withRouter(Auth))