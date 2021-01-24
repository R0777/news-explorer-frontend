import React from 'react';
import avatar from '../../images/jpg/girl.jpg';
import './About.css'

const About = () => {
    return (
<section className="about">
    <img src={avatar} alt="" className="about__pic" />
      <div className="about__author">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы
          занимаетесь, какими технологиями разработки владеете.<br /><br />
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь
          потенциальным заказчикам.</p>
      </div>
    </section>
    );
}

export default About;