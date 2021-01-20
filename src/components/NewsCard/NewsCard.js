import React from 'react';
import img from '../../images/jpg/img1.jpg'
import './NewsCard.css'

const NewsCard = (props) => {
    return (
      <figure className="news__card">
        <img src={img} alt="Национальное достояние – парки" className="news__card-pic" />
          <div className="news__card-utils">
            <p className="news__card-topic">Природа</p>
            <button className="news__card-flag"></button>
            <p className="news__card-info">Войдите, чтобы сохранять статьи</p>

          </div>
        <figcaption className="news__caption">
          <p className="news__card-date">2 августа, 2019</p>
          <h4 className="news__card-title">Национальное достояние – парки</h4>
          <p className="news__card-text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться
                к природе.</p>
          <p className="news__card-src">Лента.ру</p>
        </figcaption>
      </figure>
    );
}

export default NewsCard;