import React from 'react';
import '../style/footer.css';
import github from '../img/github.png'
import gmail from '../img/gmail-logo.png'
import linkedin from '../img/linkedin.png'


const Footer = ()=>{
  return (
    <div className='footer'>
        <div className='text'>
            <h3>Keep in Touch</h3>
            <span>Contact me ,watch more project in this channel below.</span>
        </div>
        <div className='icon-grp'>
            <a href='https://github.com/Thitiporn3131'>
                <img src={github}/>
            </a>
            <a href='mailto:thitipornforwork@gmail.com'>
                <img src={gmail}/>
            </a>
            <a href='https://www.linkedin.com/in/thitiporn-tangkantitham-ab7b2822a/'>
                <img src={linkedin}/>
            </a>
        </div>
    </div>
  )
}

export default Footer
