import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

const drillBody = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const drillBodyOne = {
    backgroundColor: '#333333', 
    height: '100vh', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const quoteBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const buttonDiv = {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}




  const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}
class MyTraining extends Component{
    constructor(){
        super()
        this.state ={
            

        }
    }



    render(){
        return(
            <div style= { drillBody} >
                <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>
                <div style={buttonDiv}>
                    <button  onClick={() => this.props.history.push('/mydrills')}>my drills</button>
                    <button  onClick={() => this.props.history.push('/mytrainers')}>my trainers</button>
                </div>
                <div>
                    <div style= { drillBodyOne}>

                    </div>
                </div>

                <div class='footer' style= {foot} > STAY FROSTY </div>
            </div>
        )
    }
}

export default (withRouter(MyTraining))