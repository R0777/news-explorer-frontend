import React from 'react';
import Preloader from '../Preloader/Preloader'
import Nonews from '../Nonews/Nonews'
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css'

import {CurrentSavedNewsContext} from '../../contexts/CurrentSavedNewsContext'
import {CurrentNewsContext} from '../../contexts/CurrentNewsContext'

const NewsCardList = ({showMore, ...props}) => {

  const rand = () => {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = '';
    for (let i = 0; i < 10; i++) {
      id += abc.charAt(Math.floor(Math.random() * abc.length));
    }
    return id;
  }

  const display = {
    display: 'block',
  }
  const displayNon = {
    display: 'none',
  }

    const currentSavedNewsContext = React.useContext(CurrentSavedNewsContext);
    const currentNewsContext = React.useContext(CurrentNewsContext);

    const items = currentNewsContext.map(item => ({
      keyword: props.keyword,
      img: item.urlToImage,
      source: item.source.name,
        _id: rand(),
        owner: item.owner,
        alt: item.title,
        date: item.publishedAt,
        url: item.url,
        title: item.title,
        description: item.description,
        index: currentNewsContext.indexOf(item),
        saved: currentSavedNewsContext.find((elem) => elem.link === item.url)
        
    }))

    return (
        <section className="news" style={props.news ? display : displayNon}>
          <div className="news__found" style={props.newsFound ? display : displayNon}>
            <h2 className="news__title">Результаты поиска</h2>
            <div className="news__cards">
            {items.map(card => <NewsCard key={card._id} {...card} {...props}/>)}

            </div>
            <button className="news__found-button" onClick={showMore}>Показать еще</button>
          </div>
        <Preloader searching={props.searching} />
        <Nonews noNews={props.noNews} />
        </section>
    );
}

export default NewsCardList;