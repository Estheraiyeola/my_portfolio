import React from 'react';
import './skills.css';
import WebDevelopment from '../../assets/web-development.jpeg';
import AppDevelopment from '../../assets/app-development.jpeg';
import DatabaseManagement from '../../assets/database-management.png';

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I do</span>
       <span className='skillDesc'>As a web developer, I specialize in designing and coding responsive, user-friendly websites.<br/>
        Proficient in front-end and back-end technologies, I create dynamic web solutions that enhance user experiences and drive online success.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDevelopment} alt='WebDevelopment' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>This is a demo text, to be completed soon.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDevelopment} alt='AppDevelopment' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Development</h2>
                    <p>This is a demo text, to be completed soon.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={DatabaseManagement} alt='DatabaseManagement' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Database Management</h2>
                    <p>This is a demo text, to be completed soon.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills
