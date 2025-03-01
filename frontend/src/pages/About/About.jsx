import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>O nas</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>O BookRate</h2>
            <p className='fs-17'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque at, in rerum quam sapiente earum totam obcaecati soluta, atque fuga excepturi libero neque! Illo magnam nulla vitae temporibus voluptatum ducimus sint. Inventore officiis ex asperiores.</p>

            <p className='fs-17'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias, eveniet fugiat pariatur et, quisquam nemo iusto magni deleniti, ratione consectetur debitis sint nihil atque repellendus corrupti. Nesciunt hic aspernatur adipisci, impedit nam accusantium reprehenderit quidem modi aliquam vero esse, incidunt consequatur veritatis illum corporis tempora illo numquam nihil saepe?</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About