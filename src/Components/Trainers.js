import React, {Component} from 'react'
import axios from 'axios'
import Footer from './Footer'
import useAxios from '../hooks/useAxios'


const drillBody = {
    backgroundColor: '#333333', 
    height: '100%', 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'


}

const space = {
    backgroundColor: 'black',
    width: '100%',
    height: '5px'
}

const quoteBox = {
    backgroundColor: 'rgba(117, 111, 111, 0.95)',
    // backgroundColor: 'rgb(223, 206, 206)',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '25px'

}

const drilltable = {
    backgroundImage: 'url(https://lh3.googleusercontent.com/FHImgwwqRycE2knaGoSQOowYo12YCX4okPgzRqjGg6D1BWgYjzEOZpeVIvnWtwZYihIq7yQzEpQbErv7-Holq5ia1QHOQPyAG4qBOfW8p4fzyZz_gLYN6bUufO3eiwXfs9PhW6vCgblZsS1NqxGbu-mgHHMbi9EeSO--qsOryGU_XWwJ6SR4peKxBKopr7ZwVGFZIyoxzDa5nUYWmLbYn-oQ-7txWh6sV62iF2YaAdFzPiQe8iaDRJBayh4ZKnFybCBkL7WviC5VdHmgAjp0M0zG3m14FCt3J0FeqF5rnqF2B_hdQo1ToKrnN4SVwLxr64fp4nSQAzOjRwzn9hI6raxQeJPzoMGpKPPZXyjzRprDyQsTiuLRGrl8_sFzU_YPqO8Uth11ZkxP7FHiwkzwo8acXZaDuhmfrJd8u08DRSYNGMnMQYeuZOY78U2NxOOnTtmnqAw2O-3iNOQgTQiguunY-ZogenO6LAk791JKhPnOyXb8vL2loiDXN6Cy7LUF3fzEaQD0UnDpNOp-wAE5RO_cOcuM5bJSi-e4CxDrDxd3rLkwR0jGlIU0RaRT62eQJ9aXUx2rRvJAWZmEQZpj4I9NM6WvIwXcPX5pXrWyF1YFUgRjkNJFeonDrc9U-zhGGecTAPfwYelBYT6OgQ9XInoezTzz01w3Q6o68YXcttvCSO6rWXBAnbI=w1169-h657-no)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    // backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap'
  
  }

  const drillbox = {
    //   backgroundColor: 'rgb(223, 206, 206)',
      width: '500px',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      fontSize: '25px',
      fontWeight: 'bold',
      margin: '10px',
      backgroundColor: 'rgba(172, 154, 123, 0.9)',
      borderRadius: '15px',
      flexWrap: 'wrap'
      
  }

  const drillLabel = {
      fontSize: '15px',
      margin: '5px',
      display: 'flex',
      flexWrap: 'wrap'
  }

const buttonStyle = {
    backgroundColor: '#FF5A5F',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold'
}


const Trainers = ({history}) => {
    const [trainers] = useAxios('/api/trainers')




    const pushTrainer = (trainer_id) => {
          

        axios.post('/api/postTrainer', {trainer_id})
        .then(() => {
            history.push('/myTrainers')
          })


    }


    
        return(
            <div style= { drillBody}>
                <div style= {space}></div>
                <div style= {drilltable} className= 'trainerTable'>
                <div style= {quoteBox}>
                “As all born teachers, he was primarily a student.”― Steven Pressfield, Gates of Fire

                </div>
                    {trainers.map(trainers => {
                        return (
                            <div style= {drillbox}>
                                NAME: <h1 style= {drillLabel}>{trainers.name}</h1>
                                TRAINING SKILLS: <h1 style= {drillLabel}>{trainers.training_skills}</h1>
                                BIO:  <h1 style= {drillLabel}>{trainers.biography}</h1>
                                CREDENTIALS: <h1 style= {drillLabel}>{trainers.credentials}</h1>
                                LINKS: <a style= {drillLabel} href={trainers.links} target= '_blank'>{trainers.links}</a>
                                OFFERED TRAINING: <h1 style= {drillLabel}>{trainers.offeredtraining}</h1>
                                MEDIA: <h1 style= {drillLabel}>{trainers.media}</h1>
                                FACEBOOK: <a style= {drillLabel} href={trainers.facebook} target= '_blank'>{trainers.facebook}</a>
                                INSTAGRAM: <a style= {drillLabel} href={trainers.instagram} target= '_blank'>{trainers.instagram}</a>
                                PODCAST: <h1 style= {drillLabel}>{trainers.podcast}</h1>
                                YOUTUBE: <a style= {drillLabel} href={trainers.youtube} target= '_blank'> {trainers.youtube}
                                    </a>
                            
                                <button style= {buttonStyle} onClick = {() => pushTrainer(trainers.trainer_id)}>add to my Trainers</button>
                            </div>
                        )
                    })}
                    

                <Footer/>
                
                </div>
            </div>
        )
    }


export default Trainers