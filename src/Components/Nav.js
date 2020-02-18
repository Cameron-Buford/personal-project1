import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {getUser} from '../Duxx/reducer'


//STYLING

const title = {
    fontSize: '55px',
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

        if (this.props.location.pathname === '/auth') {
            return <></>;
         } else {
             return(
                    <div style = { title } className= 'navbar' >
                        
                        <button className='drillsbutton' onClick={() => this.props.history.push('/drills')}>Drills</button>
                        <button  className='trainersbutton' onClick={() => this.props.history.push('/trainers')}>Trainers</button>
                        TRAINING HQ
                        <button className='homebutton' onClick={() => this.props.history.push('/')}>Home</button>
                        <button className='mytrainingbutton' onClick={() => this.props.history.push('/mytraining')}>My Training</button>
                        <div>
                            <button className='loginbutton' onClick={() => this.props.history.push('/auth')}>Login</button>
                            <button onClick= {() => this.logout()}>logout</button>
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