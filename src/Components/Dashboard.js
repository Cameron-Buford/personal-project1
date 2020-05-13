import React, {Component} from 'react'
import Footer from './Footer'



//container styling

    //background
    //dimensions
    //flex positioning
    //other positioning
    //font


const backbody= {
    // backgroundImage: 'url(https://lh3.googleusercontent.com/b6OP4BGfmLvt7ZZ93baSyE_m4d8-tdEsQc8wXl0RD-w02H77AbJS-XRDoA423JuJt4USXHeLKIpqvytUlUFMNxAc-Lmgnx1MyQFE6u7NfrqzoLjVWsVLDw5M3pUZdlLiP9170c2W2agkpexVUPDEI0BlhNSq2lbMJQQI1yrzEVii3icdRSCmeX3kixEAClioOheMsI0cHe-Q9f26tbsOr-quIEKm1xZ-f7jzN7A8ndU39x6fRbjvrT8zGFaDasIiCOGPG3zE701Pj_Mq32zVa1nNWPuMyniCxrHqMRAyF1NvlDsMjF-q7jeBEgJFlmYaBH3k0ffJR9w9p6fwmQ9i-pJB6SceX8sTv6W0olC6GRrJnsmJsc6eVtUxPRc6NH_2cxqtTSmjeUFnHXV_Ic0GD4e8F7wEZ4vX6_usZiRotTr7iIaJHsdifP10Z59KiM4lWDVxP0A_9nPMNz3QJYiDHHoeQgYNDa2zeM2nIaC0sJDcTOJWd-4QFrPx2KDleC5Y9EuOMDROik1evrE-5DGHg-V60z6LRl3H3KNKzqpk6OAssJGURAK1MDNjuTv3Ib-5H9Zg8SJr7zLIhtjjm9k4atXKWyx_crQ7elXief5sdt7pOqguHFr8a8GOd_uXnjXTtCrDzrg5nijU0RzYF870ILEq9uTRRgkDG83eNCFFDtQl-vI0rji4NPwd=w986-h657-no)',
    // backgroundRepeat: 'no-repeat',
    backgroundColor: '#E3E3E3',
    // backgroundColor: 'rgb(31, 59, 31)',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

}

const dashboardStyle = {
    // backgroundColor: 'green',
    backgroundImage: 'url(https://lh3.googleusercontent.com/b6OP4BGfmLvt7ZZ93baSyE_m4d8-tdEsQc8wXl0RD-w02H77AbJS-XRDoA423JuJt4USXHeLKIpqvytUlUFMNxAc-Lmgnx1MyQFE6u7NfrqzoLjVWsVLDw5M3pUZdlLiP9170c2W2agkpexVUPDEI0BlhNSq2lbMJQQI1yrzEVii3icdRSCmeX3kixEAClioOheMsI0cHe-Q9f26tbsOr-quIEKm1xZ-f7jzN7A8ndU39x6fRbjvrT8zGFaDasIiCOGPG3zE701Pj_Mq32zVa1nNWPuMyniCxrHqMRAyF1NvlDsMjF-q7jeBEgJFlmYaBH3k0ffJR9w9p6fwmQ9i-pJB6SceX8sTv6W0olC6GRrJnsmJsc6eVtUxPRc6NH_2cxqtTSmjeUFnHXV_Ic0GD4e8F7wEZ4vX6_usZiRotTr7iIaJHsdifP10Z59KiM4lWDVxP0A_9nPMNz3QJYiDHHoeQgYNDa2zeM2nIaC0sJDcTOJWd-4QFrPx2KDleC5Y9EuOMDROik1evrE-5DGHg-V60z6LRl3H3KNKzqpk6OAssJGURAK1MDNjuTv3Ib-5H9Zg8SJr7zLIhtjjm9k4atXKWyx_crQ7elXief5sdt7pOqguHFr8a8GOd_uXnjXTtCrDzrg5nijU0RzYF870ILEq9uTRRgkDG83eNCFFDtQl-vI0rji4NPwd=w986-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundColor: 'transparent', 
    height: '1000px', 
    width: '1200px',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    // justifyContent: 'space-around',
    backgroundSize: 'cover',
    alignItems: 'center'


}

const quoteBox = {
    // backgroundColor: 'rgba(117, 111, 111, 0.95)',
    // backgroundColor: 'rgba(117, 111, 111, 0.8)',
    // backgroundColor: 'rgb(223, 206, 206)',
    backgroundColor: '#E3E3E3',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const empty= {
    backgroundColor:'transparent',
    height: '100px',
    width: '600px'
}

const aboutTitle = {

    //background
    backgroundColor: 'transparent',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '45px',
    textDecoration: 'underline',
    fontWeight: 'bold',
    
}

const aboutBox = {
   //background
    backgroundColor: 'rgba(117, 111, 111, 0.8)',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '25px',
    fontWeight: '12px',
    
    

}

const joinBox = {
    backgroundColor: 'transparent',
    height: '500px', 
    width: '1200px',
    backgroundImage: 'url(https://lh3.googleusercontent.com/43Ja1_yrILlTSGp28sukJPbWwuAVbrN9ul-qjei5IzLow14_jqS4BVrzH6ngxfZkhR95eI7ENvRbANKhwPRFoaOKpeinmEsW3h2Xt6I9-kHn3pIabgkONTnGinXWvKqdVWzEIa7iGfTnuxTUR_2EEYQ6rpKnQZzBMlvX6PV50-IBH97hjBbiZ2BMqDWkJoY7DOWyaf69oR-_41lQ6pWnEDDhELfZi5QJcLh2ymefav9uHoS06JG2oqOXw6THf0elyHQRFvSx7krB7bxsSXxuVl5S4W19-RQIgZDnJkLj5MEoGn1ArjLNNQd7YRf8jyVKFuaA42B55d78xtI49oKh3s0CPwaAg3A0f0hOveI10ZckiTeGl6JE8DVt18cNpUBBdLzQ7t6ppY7dI8o0zxsnnNEqeNKKIvFwDlfPhoeo2iHGWxn6HuXBeyorxLEQE26TWflGw5VWssq360kYmw_mVRZRNDZB7w5B3OpxJmABGhBbfNYddoYMttIO8P1-Vs70jW6kmaYBoHtBBu5nsPb-f6OKtK4wpF4ifl6jW_LWw1bbFSHgjl4UlqkBspdLfK55-9DyWYii-6Vyk1lz0hKOnFl2DIcg0kLy0XtoaJo0VEd4pRP3gHsEWfId7aXQwX3rGLZHMOks_kXgcgur95X_ELaVrpPSdKk4JZuhuf8Qc_86q-mt8mkhDoM=w1136-h640-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    // backgroundPosition: 'center',
    // // backgroundColor: 'transparent', 
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
    
}

const joinTitle= {
   
    //background
    backgroundColor: 'transparent',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '45px',
    textDecoration: 'underline',
    fontWeight: 'bold',



}

const joinText= {
    
    //background
    backgroundColor: 'rgba(117, 111, 111, 0.8)',
    //dimensions
    width: '500px',
    height: '400px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '25px',
    fontWeight: '12px'
    

}

const leoTitle = {
    //background
    backgroundColor: 'transparent',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '45px',
    textDecoration: 'underline',
    fontWeight: 'bold',
}

const leoBox = {
    //background style
    backgroundImage: 'url(https://lh3.googleusercontent.com/HlczxIJfryJ-RnK0c6cxX7_AeGI00qF0XAUJxGZMbZk2x1SuvqrZV5yEe7d44mLZZlj2OnI2ggYzmtdlY2uNlyJnScq2K4noikq3_qbaLHeS5g61QUW3sJQn7aQ3mQv_XCKZ7dVbZP8OiXC5tL2JC75XKHQWpOzQCZW7wRhnsHobgtTrx4AswpdTmw9roqfcSEXu043tCucjJ4olJqPdKZB-DM2tmluQA3o6v18Kk5hEjUialx76_P_58xEqZgv-Qym3uoxluSzLRKwOgKz78303a8pgFFlzf-TyIqZupJNhT0Xz2Oz2PgcZdq_tFGtGlVVlBn_NfrBfme2xLhNCpcETP8Z_mUbUwUO7hvLx73QbKcBqZ3JB7ZgcyYV-FsIg_ccmrZFjnKvMLhtON9_CHv_tOWvRlY5vZSw56l2xif304kE_VXxnSkOUPee0sTD59UG4O-2ar28yljoByYFxkprmUbZui3yL7jnD542L4DWnrLUXBS2dfDWlp_FyKgfU1l4eqqufLEna-tJfhGtNuxbm71IVFd3A16pRp14u8jSkhS2i1Czkc0djlYai07iTLR_j-ad8jORX4_IAdhRLp7nhWcLEEnsujnvgGIiSpKXXgFOqbnWh_XLIKuytLuaJOlmplOkq5p5pMTxSRFWZY4ZVsi37R019t1ugTCqv6P9UerJZS4cPTHO-QzDoaiU=w876-h659-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    //dimensions
    height: '500px', 
    width: '1200px',
    minHeight: '400px',
    //flex positioning
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    


}

const leoOuterBox = {
    //background
    backgroundColor: 'transparent',
    //dimenstions
    width: '600px',
    //flex positioning
    display: 'flex', 
    // justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'column'
    
}

const leoTextBox = {
    //background
    backgroundColor: 'rgba(117, 111, 111, 0.8)',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '25px',
    fontWeight: '12px'
}

const civTitle = {
    //background
    backgroundColor: 'transparent',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '45px',
    textDecoration: 'underline',
    fontWeight: 'bold',
}

const civBox = {
    //background style
    backgroundImage: 'url(https://lh3.googleusercontent.com/qKKaHiyPTLnx6UewT_8IERPIqk8mG3IN8mo7zQJB3JYzOqARf9lbiRwa7FPigAJYye0fm7tSmYgiQ0bAE4fAsPz_WBFPQwMW8kQRS9TaaMRzYS6txD5CsQVXnRdtgFDRULU1ihG4MYOM6l_gtoPmviCo4L7ERBuRREmQrLhYIxakX7U-MaW7iADpnifbS9tWajIxv1N4GnmqwETxdq7afI9yF-aaU82IQAwfBsVvVC59GigNUm2ZlFBljL4XUkwGX17QdclpE79XTVr-8StBOzGqOfIpRxi7tTe8GYa69cUyggkdq9grjQMRCQdT_t0kqyIf0dqWMvwOqvi75KjB3kn1Fon1NS-Umjiq16YYRgvbtuQqHM4MV_RPpcJ4F8m2VMffdOQ_bjwGs9wcmxhCQ19LIItO0KCuSZrH-Fqs-FOh4KppLZYMnaRe4cAv3yhuqX7jf8HTWtjiPEgf9W5Rsb6kbEkQhNEwb2Uq869ojHIh1entMG_6DVl44-nMOqbo7aPTdpvb3wSqEdjjeYymbqkZmSqKLV1yxkXRY1NPx7Kif5bGNfraBc2hs0Sm-m8xhWolL_wvZaDteK3rli1Il3uiR605FTTxRz0BpE3DxIw5s_ErPCTIf_uBtgZ0QJ74IdCO7_uAQNMIPKsSb7M5PbcmEkg7sQbIiGmuNN7BpI9HfATd8qrI885BKEM8yXM=w1367-h615-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    //dimensions
    height: '500px', 
    width: '1200px',
    minHeight: '400px',
    //flex positioning
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center'
    

}

const emptyCiv = {
    backgroundColor: 'transparent',
    height: '50px',
    width: '600px'
}

const civOuterBox = {
    //background
    backgroundColor: 'transparent',
    //dimenstions
    width: '600px',
    //flex positioning
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:'column'
}

const civTextBox = {

    //background
    backgroundColor: 'rgba(117, 111, 111, 0.8)',
    //dimensions
    width: '500px',
    //flex positioning
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    //other positioning
    padding: '10px',
    //font
    color: '#f2f2f2',
    fontSize: '25px',
    fontWeight: '12px'
}

const joinNowButtonDashboard = {
    /* background */
    backgroundColor: '#CD2027',
    /* dimensions */
    height: '40px',
    width: '100px',
    /* flex positioning */
    /* other positioning */
    /* font */
    color: 'white',
    fontWeight: 'bold',
    /* other */
    border: 'none',
    cursor: 'pointer'
    
   }

   const aboutDashButton = {
    /* background */
    backgroundColor: '#CD2027',
    /* dimensions */
    height: '40px',
    width: '100px',
    /* flex positioning */
    /* other positioning */
    /* font */
    color: 'white',
    fontWeight: 'bold',
    /* other */
    border: 'none',
    cursor: 'pointer'
    
   }
   



class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
        }
    }
    render(){
        return(
            <div>
                <div style= {backbody}>
                    <div style= {quoteBox}>
                        "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis
                    </div>
                <div style= {dashboardStyle} className= 'dashboardStyle'>
                    <div style= { aboutBox} >
                        <div style= { aboutTitle }>ABOUT THE TRAINING HQ </div>
                            Welcome to the Training HQ. Bringing you an "on the range" resource to track your training goals.  With industry standard drills from the gunfighting and competition world, you have no excuse to not hold yourself accountable and strive for constant improvement.  Track your progress with scores and times and become the safest and most efficient gunhandler through organized drill testing.
                        <button
                            onClick = {() => this.props.history.push('/about')}
                            style = {aboutDashButton}>
                                ABOUT US</button>
                    </div>
                    <div style= {empty}></div>
                </div>
                <div style= {joinBox}>
                    <div style= {empty}></div>
                    <div style= {joinText}> 
                        <div style= {joinTitle}>Join the Team </div>
                            Join the community and hold yourself accountable through personalized drill progress tracking.  Become the best shooter that you can be and join now. 
                        <button 
                            style= {joinNowButtonDashboard}
                            onClick= {() => this.props.history.push('/register')}>
                                Join Now 
                        </button>
                    </div>
                </div>
                    <div style= {civBox}> 
                        <div style= { civOuterBox}>
                            <div style= {civTextBox}>
                                <div style= { civTitle}>
                                    CIVILIAN 
                                </div>
                                Citizens have the right to protect themselves and those around them. As a citizen who chooses to carry a firearm or own a firearm, the responsibility is on you to be proficient with your chosen weapon. Get out on the range and practice.  Hold yourself accountable and measure yourself up on the drills you shoot and track your progress.
                            </div>
                        </div>
                    </div>
                    <div style= {leoBox}>
                        <div style= {emptyCiv}></div>
                        <div style= { leoOuterBox}>
                            <div style= {leoTextBox}>
                                <div style={ leoTitle }> 
                                    LAW ENFORCEMENT 
                                </div>
                                    When you carry a firearm daily for work, the responsibilty is on you to be the best operator of that tool. As a Law Enforcement Officer, always strive to be better to save your own life or the life of those around you when that moment finds you on or off the clock. 
                            </div>
                        </div>
                    </div>
                <Footer/>
                </div>
            </div>
        )       
    }
}
export default Dashboard




                
                

            
