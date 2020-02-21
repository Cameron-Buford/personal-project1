import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'

import {getUser} from '../Duxx/reducer'
import {connect} from 'react-redux'

const drillBody = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const trainingBody = {
    backgroundImage: 'url(https://lh3.googleusercontent.com/RW6wJngp9BiX_JCm7OHu57yoA1GtaUvRwLHqQeP134_z_9oAYIdxmyelg1LoqEaqB6yRLS2TQY28xkRfdduBlgUgjtG1Cr8-Xn_RwXB7rVz07ljRMXuNDlo1LHhgelz0Jbq8hiZfXEYIWZ4-Vwa8fra_5tyrs-p7yFcgegzhdqL-7sZ9wURhhvLePqK8sf_g5HUB86QdKxj1f2kdDpm7LlQt6wqV2RB71b8WoE8B-B6niL0JWrBV3a5PVEQhvECknw5D4Y77OS7pspYWWV1VIW3xY_JeYXEcVfgZgzr31oBe20CGum92xWvVow1skB7CvpDY3Qs0SYv8l1KnfIfSNjmeMdqzvKEMd7VrwezptLPhyubFtnsBZJWmFV4OaJtjYpR2X8DOuENtT0kL-pd45saGmE4ouf1b-3e60KoIwu2JDz6xIOWrBuYSMTH6N2cMi7HhYoTvy76r1ymvR_gQYIi_q8eeHw1GEUe4wfkSFjZfAUkM2KkEMSeFHVXDixycNKTimHveGfiHpGznpfNGNHRbzl7_cank-atCzYJbJL52B26UM2B6GSo_JnCPbCzIW_kP5aJwqhSeUCsODJRL2wX53JOLUeFZ_gvWV_9O5ZkBM4VKw9R4VOGLPbCYhGrgIG_tg8c1CtmSDmfEtPFa3AV3DxRiDLVFmx9Utkw9NeN6rzxppb2w0IVC=w986-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%'
}

const drillBodyOne = {
    backgroundColor: 'transparent', 
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
const MyTraining = ({history, user}) => {
 


    useEffect(() => {

        if(!user.user_id ){
            history.push('/auth')
        }

    }, [])
        return(
            <div style= { drillBody} >
                <div style= {quoteBox}>
                “You have never tasted freedom... or you would know it is purchased not with gold, but steel.” Dienekes― Steven Pressfield, Gates of Fire

                </div>
                <div style = {trainingBody}>
                    <div style={buttonDiv}>
                        <button  onClick={() => history.push('/mydrills')}>my drills</button>
                        <button  onClick={() => history.push('/mytrainers')}>my trainers</button>
                    </div>
                    <div>
                        <div style= { drillBodyOne}></div>
                    </div>
                </div>

                <div class='footer' style= {foot} > STAY FROSTY </div>
            </div>
        )
    
}

function mapStateToProps(state) {
    return {user: state.reducer.user};
    
}

export default connect(mapStateToProps)(withRouter(MyTraining))