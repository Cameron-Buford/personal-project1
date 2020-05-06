import React, {Component} from 'react'
import Footer from './Footer'


//container styling


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

const space = {
    backgroundColor: 'black',
    width: '100%',
    height: '5px'

  
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
    height: '100px',
    width: '600px'
}

const aboutTitle = {


    fontSize: '25px',
    textDecoration: 'underline',
    backgroundColor: 'transparent',
    color: '#f2f2f2',
    fontWeight: 'bold',
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    justifyContent: 'center'
}

const aboutBox = {
   
    color: '#f2f2f2',
    fontWeight: 'bold',
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    flexDirection: 'column',
    backgroundColor: 'rgba(117, 111, 111, 0.8)'
    

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
   



    fontSize: '25px',
    textDecoration: 'underline',
    backgroundColor: 'transparent',
    color: '#f2f2f2',
    fontWeight: 'bold',
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    justifyContent: 'center'

}

const joinText= {
    
    
    // backgroundColor: 'transparent',
    width: '1200px',
    color: '#f2f2f2',
    fontWeight: 'bold',
    width: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    flexDirection: 'column',
    backgroundColor: 'rgba(117, 111, 111, 0.8)'

}

const spacerOne = {
    backgroundColor: 'transparent',
    width: '100%',
    minHeight: '100px'
}

const spacerTwo = {
    backgroundColor: 'rgba(117, 111, 111, 0.8)',
    width: '100%',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    textDecoration: 'underline overline' 
}

const categoryContainer = {
    backgroundColor: 'rgba(117, 111, 111, 0.8)',
    width: '100%',
    height: '1000px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline'
       

}

const leoTitle = {
    fontSize:'25px',
    fontWeight: 'bold'
}

const leoBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '400px',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: '12px'


}

const leoOuterBox = {
    // backgroundColor:'green',
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center',
    
}

const leoTextBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '350px',
    // height: ''
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    
}

const civTitle = {
    fontSize:'25px',
    fontWeight: 'bold'
}

const civBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '400px',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: '12px'
    

}

const civOuterBox = {
    // backgroundColor:'green',
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center'
}

const civTextBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '350px',
    // height: ''
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
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
                        {/* <div style= {space}></div> */}
                    <div style= {quoteBox}>
                        "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis
                    </div>
                {/* <div style= { spacerOne }></div> */}
                <div style= {dashboardStyle} className= 'dashboardStyle'>
                    <div style= { aboutBox} >
                        <div style= { aboutTitle }>ABOUT THE TRAINING HQ </div>
                             Welcome to the Training HQ. The industry is oversaturated with "tactical  trainers" and those who profess to teach tactical gunsmanship and gunfighting skills for LEO and Civilian gunhandlers.  Much of the training that is easiliy found by many in the private sector, your agency or local department is anywhere from subpar all the way to dangerous. We believe every LEO and Civilian who carries the means of deadly force have the duty to seek the correct training and work to be the best and most responsible asset that they can be. Here at the HQ, we work to provide you with resources to to fulfill your search for the most compentent and experienced trainers in the industry. The days of searching the web for trainers to be caught by marketing schemes of subpar, inexperienced or downright negligent trainers are over.  Feel free to browse our library of trainers to find what will suite your training needs best.  Furthermore, we work to provide a library of industry and Top Tier unit drills and score standards for you to train on and work toward. For every true student, the search for knowledge, skill and wisdom is an endless persuit and we, at the Training HQ, share that drive. We hope that we can come together to train as guardians and assets to those we love and the nation we love and learn from the best to become the best we can be with what we have.  Upwards and onwards.  Stay Frosty. 
                    </div>
                    <div style= {empty}></div>
                </div>
                <div style= {joinBox}>
                    <div style= {empty}></div>
                    <div style= {joinText}> 
                        <div style= {joinTitle}>Join the Team </div>
                            Join the community by registering for your own personal training profile.  As a member of the community, you will have the ability to add drills from our drill library and track your progress on each drill you add.  You can edit your score as you work the shooting standards in the drills and follow your own skill growth.  Furthermore, you will be able to save trainers to your profile as favorites that fit your needs and personal training plans.  Join the community today to hold yourself responsible for your personal journey to be the best guardian that you can be.  We will see you on the range. 
                    </div>
                </div>
                <div style= { spacerOne }></div>
                <div style= { spacerTwo }> GUARDIANS </div>
                <div style= {categoryContainer} className= 'categoryContainer'>
                    <div style= {leoBox}>
                        <div style={ leoTitle }> 
                            LAW ENFORCEMENT 
                        </div>
                        <div style= { leoOuterBox}>
                            <div style= {leoTextBox}>
                                In todays environment, LEOs are forced to work and operate in a world of complexity and gradation. The need for proficiency in the wide array of skills to perform their daily tasks is paramount and cannot be emphasised enough. The lack of individual proficiency with their availble tools and the ability to make quick decisions and target discrimination can result in the loss of innocent life.  The training offered in many LE departments or agencies do not satisfy the demands of the job to be the guardians that society expects them to be.  We seek to fill the gap in training by providing the resources for the vigilant LEO to find the individual or department/agency training to meet the weaknesses of their specific abilities. The result of which will save lives of officers, agents and civilians alike and elevate the quality of service and protection offered to those of whom we are all dependant as badged responders.
                            </div>
                        </div>
                    </div>
                    <div style= {civBox}> 
                        <div style= { civTitle}>
                            CIVILIAN 
                        </div>
                        <div style= { civOuterBox}>
                            <div style= {civTextBox}>
                                 As a civilian, the right to bear arms is endowned on us from powers that exceed that of the government. We have the human right to protect ourselves, our families, those we love and our nation with the means of our choice.  As an armed civilian, it is imperative that we take the responsibilites of the means of leathal force with the upmost of seriousness. In the landscape of our daily interactions on our communities, we cannot predict what each day may bring. But we can and must maintain a state of preparedness for the complex world in which we live. It is the duty of every civilian who chooses to act out their right to self and familial preservation to be the most proficient and skillful operator of their weapon as possible. To be dangerous is a sacred and heavy responsibility. One cannot be peaceful if they do not possess the ability to enact the opposite. To act out this sacred duty for the good of the innocent, every armed civilian needs to seek out the best training from the best trainers that our society can offer. We must seek the proper training and constantly hone our skills in the dark event that they will be needed.    
                            </div>
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




                
                

            
