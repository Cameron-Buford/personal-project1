import React, {Component} from 'react'


//container styling


const dashboardStyle = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'


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

const aboutTitle = {
    backgroundColor: 'rgb(133, 121, 121',
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'
}

const aboutBox = {
    backgroundColor: 'rgb(133, 121, 121)',
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around' 

}

const spacerOne = {
    backgroundColor: '#333333',
    width: '100%',
    height: '100px'
}

const categoryContainer = {
    backgroundColor: '#333333',
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
    justifyContent: 'space-around'


}

const leoOuterBox = {
    // backgroundColor:'green',
    display: 'flex', 
    justifyContent: 'space-around',
    alignItems: 'center'
}





const leoTextBox = {
    backgroundColor: 'rgb(223, 206, 206)',
    width: '350px',
    // height: ''
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
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
    justifyContent: 'space-around'
    

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


const foot = {
    backgroundColor: 'rgb(133, 121, 121)',
    height: '100px',
    width: '100%',
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
            <div style= {dashboardStyle}>

                <div style= {quoteBox}>
                    "Think like men of action.  Act like men of thought. Live life with intensity, and a passion for excellence." General Mattis

                </div>

                <div style= { aboutTitle }>ABOUT THE TRAINING HQ </div>

                

                    <div style= { aboutBox}>
                         Welcome to the Training HQ. The industry is oversaturated with "tactical trainers" and those who profess to teach tactical gunsmanship and gunfighting skills for LEO and Civilian gunhandlers.  Much of the training that is easiliy found by many in the private sector, your agency or local department is anywhere from subpar all the way to dangerous. We believe every LEO and Civilian who carries the means of deadly force have the duty to seek the correct training and work to be the best and most responsible asset that they can be. Here at the HQ, we work to provide you with resources to to fulfill your search for the most compentent and experienced trainers in the industry. The days of searching the web for trainers to be caught by marketing schemes of subpar, inexperienced or downright negligent trainers are over.  Feel free to browse our library of trainers to find what will suite your training needs best.  Furthermore, we work to provide a library of industry and Top Tier unit drills and score standards for you to train on and work toward. For every true student, the search for knowledge, skill and wisdom is an endless persuit and we, at the Training HQ, share that drive. We hope that we can come together to train as guardians and assets to those we love and the nation we love and learn from the best to become the best we can be with what we have.  Upwards and onwards.  Stay Frosty. 
                    </div>

                
                <div style= { spacerOne }></div>
                <div style= {categoryContainer}>

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

                <div class='footer' style= {foot} > STAY FROSTY </div>
            
            </div>
        )
    }
}

export default Dashboard