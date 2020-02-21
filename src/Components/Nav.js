import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {getUser} from '../Duxx/reducer'


//STYLING

const title = {
    
    fontSize: '55px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'baseline',
    textDecoration: 'underline overline'
    

}

const titleContainer = {
    height: '100px',
    display: 'flex',
    alignItems: 'baseline'
}

const buttonLine = {
    backgroundColor: 'rgba(117, 111, 111, 0.5)'
}

const buttons = {
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '30px'
}

const loginButtons = {
    backgroundColor: 'transparent',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '15px'
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

        if (this.props.location.pathname === '/auth') {
            return <></>;
         } else {
             return(
             <div className= 'navbar'>

                    <div style= {titleContainer}>

                        <div style = { title }  > TRAINING HQ </div>
                    </div>

                    <div style= {buttonLine}>

                        <button style= {buttons} className='homebutton' onClick={() => this.props.history.push('/')}>Home</button>
                        
                        <button style= {buttons} className='drillsbutton' onClick={() => this.props.history.push('/drills')}>Drills</button>
                        <button style= {buttons} className='trainersbutton' onClick={() => this.props.history.push('/trainers')}>Trainers</button>
                        
                        
                        <button style= {buttons} className='mytrainingbutton' onClick={() => this.props.history.push('/mytraining')}>My Training</button>
                    </div>

                    <div>
                        <button style= {loginButtons} className='loginbutton' onClick={() => this.props.history.push('/auth')}>Login/Register</button>
                        <button style= {loginButtons} onClick= {() => this.logout()}>logout</button>
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