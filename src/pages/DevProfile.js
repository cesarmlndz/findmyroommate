import React from 'react'
import '../css/DevProfile.css'
import cesar from '../icons/cesar.png'
import instagram from '../icons/instagram.webp'
import linkedIn from '../icons/linkedinlogo.png'

export default function DevProfile() {
  return (
    <div className='dev-profile'>
        <h1 className='title'>Meet the Developer</h1>
        <div className='content'>
            <p>Hello! My name is Cesar Melendez and I am the developer of this application. I am currently pursuing a
            Bachelor of Science (B.S) in Computer Engineering at the College of Engineering and Computing at 
            Florida International University. I hope to graudate with this degree in the Fall of 2023. I was born in San Juan, 
            Puerto Rico and later moved to South Florida.
            <br></br><br></br>
            Software Engineering as a whole is my passion and I do not see myself doing anything else. More recently I have been diving
            deeper into the realm of web-development. I feel web-devlopment is a great tool to start creating projects of your own, which
            can then be showcased to the world. 'findmyroommate' is one of those projects. It was created with ReactJs on the frontend and
            Google Firebase on the backend.
            </p>
            <div className='dev-image-container'>
                <img className='cesar' src={cesar}/>
                <div className='media-links'>
                    <a href='https://www.instagram.com/cesarmlndz/' target='_blank'><img className='IG' src={instagram}/></a>
                    <a href='https://www.linkedin.com/in/cesar-melendez-16b3b01b8/' target='_blank'><img className='linkedIn' src={linkedIn}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}