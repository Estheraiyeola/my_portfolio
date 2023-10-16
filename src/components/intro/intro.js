import React from 'react';
import './intro.css';
import bg from '../../assets/picture.JPG';
import btnImg from '../../assets/hire.jpg'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm<span className='introName'> Esther<br/></span>A Software Engineer <br/></span>
            <p className='introPara'>I'm a skilled software engineer with a passion for creating efficient,<br/> user-centric solutions through clean and scalable code.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
