import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/c-portfolio.jpeg';
import Portfolio2 from '../../assets/java-portfolio.jpeg';
import Portfolio3 from '../../assets/golang-portfolio.jpg';
import Portfolio4 from '../../assets/javascript-portfolio.png';
import Portfolio5 from '../../assets/java-portfolio.jpeg';
import Portfolio6 from '../../assets/python-portfolio.jpeg';


const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>As a Software Engineer, I have been responsible for designing, developing, and maintaining software applications that meet the needs of our clients and users. My role involves working as part of a collaborative team to create and improve software solutions.</span>
      <div className='worksImgs'>
        <img src={Portfolio1} alt='' className='worksImg'/>
        <img src={Portfolio2} alt='' className='worksImg'/>
        <img src={Portfolio3} alt='' className='worksImg'/>
        <img src={Portfolio4} alt='' className='worksImg'/>
        <img src={Portfolio5} alt='' className='worksImg'/>
        <img src={Portfolio6} alt='' className='worksImg'/>

      </div>
      <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works
