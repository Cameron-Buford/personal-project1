import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const drillBody = {
    backgroundColor: '#333333', 
    height: '100%', 
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

const drilltable = {
    backgroundImage: 'url(https://lh3.googleusercontent.com/hD8U_2yXxm_0CKWnMVvY9GgoVzMa8eAJGkMQuG6SGxeABr8C9aRdvvqrBk6IQRUeQKIh2AFcfOUTqLx_GxFMPW0P-ZXNd8d2qxyaXwmbTSg2kSp3wvP2X5ySqIqxCa1CYKNHW98ySAz9ppY5D4pyrnfbqZ26cd4rCHZE11XcC_O4uRhKpkIvYrYWVt5csC9T4mn9sAliSkQTl8lusmoCMm2TrcBt-K6am0Z0AuiuTdSkvbsoZBELnCXwbNXckL-1KbBPr0uQ2aof89RNml8pzt-YCBXw2EB8zg7DE1FOX8d1y46ao0qLbMoeVkRen4IKtHUO0rkKFMsLArfpQVO6yvuMUK2QLQr22DhC6PUZLkiKe-fZ425iPD4CVuFIDehRocGEbwkNWwGSwrR_ylUBYtKf2RmbTowRI1e8onVR3fmvIEXdRhIvHPaJJ6anSmNMyLtMtSY20Lks7eV8YyP1y8KXBtKthrj2R4vMdcVoQdpTmzpDw3Vu7Eqjk0AlUjn5jXaBNrcTNdDhQnbCXW9x-3h-fbKV8F5MdVRvptOF-RrudqcnkLP0ReEaWK_OU2DRG661LscDxBXGzm7f3p-ZYWZ8lFg_cWXlMs-ya604u1o-d6Qt0MaKLZxPn0Sv7nEMchjXUjZDp3cW26ty5BoIeUUBXW1JTN_D31cThNRB3vpVqr_VAX25zmli=w431-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: 'transparent',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
    backgroundColor: 'transparent',
    width: '400px',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '10px',
    backgroundColor: 'rgba(117, 111, 111, 0.5)',
    borderRadius: '15px',
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px'
  }

  const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
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
class MyTraining extends Component{
    constructor(){
        super()
        this.state ={
            myTrainersUrl: '/api/myTrainers',
            myTrainers: []

        }
    }

    componentDidMount(){
        
        this.rerender()
        
    
      }


      rerender= () => {
        const {myTrainersUrl} = this.state;
            
        axios.get(myTrainersUrl).then(results => {
            console.log(results)
          this.setState({myTrainers: results.data})
        }).catch(err => console.log(err))
      }


      removeTrainer = (trainer_id) => {

          axios.delete(`/api/removeTrainer/${trainer_id}`)
          .then(() => {
            this.rerender()
          }).catch(err => console.log(err))
      }




      

    render(){
        
        console.log(this.state.myTrainers)
        return(
            <div style= { drillBody}>
                 <div style= {quoteBox}>
                 “With every triumph I am empowered, with every failure I am resolute—I will never quit!” ― Dale Comstock, former Army JSOC Operator

                </div>
                <button  onClick={() => this.props.history.push('/mydrills')}>my drills</button>
                <div style= { drillBodyOne}>
                <div style= {drilltable}>
                    {this.state.myTrainers.map(myTrainers => {
                        return (
                            <div style= {drillbox}>

                                NAME: <h1 style= {drillLabel}>{myTrainers.name}</h1>
                                TRAINING SKILLS: <h1 style= {drillLabel}>{myTrainers.training_skills}</h1>
                               BIO:  <h1 style= {drillLabel}>{myTrainers.biography}</h1>
                                CREDENTIALS: <h1 style= {drillLabel}>{myTrainers.credentials}</h1>

                                <button onClick= {() => this.removeTrainer(myTrainers.trainer_id)}>Remove from My Trainers</button>
                            
                                
                            </div>
                        )
                    })}
                    
                </div>

                </div>

                <div class='footer' style= {foot} > STAY FROSTY </div>
        </div>
    )
}
}

export default (withRouter(MyTraining))