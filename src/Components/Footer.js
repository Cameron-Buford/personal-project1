import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {getUser} from '../Duxx/reducer'






const footerContainer = {
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(117, 111, 111, 0.5)',
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}

const buttonLineFoot = {
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(117, 111, 111, 0.5)',
    borderRadius: '15px',
    width: '400px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textDecoration: 'underline overline'
}

const buttons = {
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'black',
    cursor: 'pointer',
    outline: 'none'
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

       

        if (this.props.location.pathname === '/auth') {
            return <></>;
         } else {
             return( 
             <div style= {footerContainer}>

                    

                    <div style= {buttonLineFoot}>

                        <button style= {buttons} className='homebutton' onClick={() => this.props.history.push('/')}>Home</button>
                        
                        <button style= {buttons} className='drillsbutton' onClick={() => this.props.history.push('/drills')}>Drills</button>
                        <button style= {buttons} className='trainersbutton' onClick={() => this.props.history.push('/trainers')}>Trainers</button>
                        
                        
                        <button style= {buttons} className='mytrainingbutton' onClick={() => this.props.history.push('/mytraining')}>My Training</button>
                    </div>

                    

                    {/* <div style= {registrationDiv}>
                        {this.props.user.user_id ? 
                        <div style= {shooterInStack}> Shooter in Stack </div>:
                        <button 
                            style= {loginButtons} 
                            className='loginbutton' 
                            onClick={() => this.props.history.push('/auth')}
                            
                            >Login/Register</button>}
                        <button style= {loginButtons} onClick= {() => this.logout()}>logout</button>
                    </div> */}
                        
                    
            </div>
                )
            }
        }
    }


function mapStateToProps(state) {
    return {user: state.reducer.user};
    
}

export default connect(mapStateToProps, {getUser})(withRouter(Nav))