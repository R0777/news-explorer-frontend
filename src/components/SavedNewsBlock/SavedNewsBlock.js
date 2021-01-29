import React from 'react';
import Nonews from '../Nonews/Nonews'
import NewsCard from '../NewsCard/NewsCard';
import './SavedNewsBlock.css'

import {CurrentSavedNewsContext} from '../../contexts/CurrentSavedNewsContext'

const SavedNewsBlock = ({showMore, ...props}) => {

  const display = {
    display: 'block',
  }
  const displayNon = {
    display: 'none',
  }

    const currentSavedNewsContext = React.useContext(CurrentSavedNewsContext);

    const items = currentSavedNewsContext.map(item => ({
        
      img: item.image,
      source: item.source,
      keyword: item.keyword,
        _id: item._id,
        owner: item.owner,
        alt: item.title,
        date: item.date,
        createdAt: item.createdAt,
        url: item.link,
        title: item.title,
        description: item.text,
        // like: item.likes.length,
        // cardLiked: item.likes.find((elem) => elem === currentUserContext._id)
    }))

    return (
        <section className="news" style={props.newsFound || props.nonews ? display : displayNon}>
          <div className="news__found" style={props.newsFound ? display : displayNon}>
            <h2 className="news__title">Результаты поиска</h2>
            <div className="news__cards">
            {items.map(card => <NewsCard key={card._id} {...card} {...props}/>)}

            </div>
            <button className="news__found-button" onClick={showMore}>Показать еще</button>
          </div>
        <Nonews nonews={props.nonews} />
        </section>
    );
}

export default SavedNewsBlock;