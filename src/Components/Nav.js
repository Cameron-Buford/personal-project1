import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {getUser} from '../Duxx/reducer'


//STYLING


const stickyNav = {
    // position: '-webkit-sticky',
    position: 'sticky',
    top: '0',
    // backgroundColor: 'green',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
}

const buttonLine = {
    // backgroundColor: 'blue',
    backgroundColor: 'transparent',
    borderRadius: '15px',
    width: '800px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textDecoration: 'underline'
}

const buttons = {
    // backgroundColor: 'red',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    fontWeight: '200',
    fontSize: '30px'
}

const registrationDiv = {
    // backgroundColor: 'yellow',
    color: 'white',
    width: '100%',
    height: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'

}

const loginButtons = {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '15px'
}

const shooterInStack = {
    color: 'white',
    fontWeight: 'bold'

}

class Nav extends Component{
    constructor(){
        super()
        this.state ={

        }
    }


    logout = () => {
        axios.post('/auth/logout').then(results => {
            this.props.getUser( {
                id: 0,
                username: '',
            })
            this.props.history.push('/auth')
        })
    }

    render(){
        console.log(this.props)

       

        if (this.props.location.pathname === '/auth' 
            ||
            this.props.location.pathname === '/register'
        ) {
            return <></>;
         } else {
             return( 
             <div className= 'navbar'>

                    
                    <div style= {stickyNav}>
                        <div style= {registrationDiv}>
                            {this.props.user.user_id ? 
                                <div style= {shooterInStack}> Shooter in Stack </div>
                                :
                                <div>
                                    <button 
                                        style= {loginButtons} 
                                        className='loginbutton' 
                                        onClick={() => this.props.history.push('/auth')}>Log in
                                    </button>
                                    <button
                                        style= {loginButtons}
                                        onClick = {() => this.props.history.push('/register')}>Register
                                    </button>
                                </div>
                            }
                            <div>
                                {this.props.user.user_id 
                                    ?
                                    <button 
                                        style= {loginButtons} 
                                        onClick= {() => this.logout()}>logout
                                    </button>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div style= {buttonLine}>

                            <button 
                                style= {buttons} 
                                className='homebutton' 
                                onClick={() => this.props.history.push('/')}>Home
                            </button>
                        
                            <button 
                                style= {buttons} 
                                className='drillsbutton' 
                                onClick={() => this.props.history.push('/drills')}>Drills
                            </button>
                            <button 
                                style= {buttons} 
                                className='trainersbutton' 
                                onClick={() => this.props.history.push('/trainers')}>Trainers
                            </button>
                        
                        
                            <button 
                                style= {buttons} 
                                className='mytrainingbutton' 
                                onClick={() => this.props.history.push('/mytraining')}>My Training
                            </button>


                        </div>

                    

                    </div>
                        
                    
            </div>
                )
            }
        }
    }


function mapStateToProps(state) {
    return {user: state.reducer.user};
    
}

export default connect(mapStateToProps, {getUser})(withRouter(Nav))