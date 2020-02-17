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
const Auth = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  

  
  const register = () => {
    axios.post("/auth/register", { username, password }).then(results => {
      props.history.push("/")
    })
  }


  const login = () => {
    axios.post("/auth/login", { username, password }).then(results => {
      props.history.push("/")
    })
  }


  return (
    <div>
        <div>
            <div>
                <p>{'username'}</p>
                <input
                        name="username"
                        value={username}
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)}
                ></input>
            </div>

            <div>
                <p>{'Password'}</p>
                <input
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                ></input>
            </div>
            <button
                onClick = {() => login()}
                >Login</button>
            <button
                onClick = {() => register()}
            >Register</button>
        </div>
    </div>
  )
}
export default Auth