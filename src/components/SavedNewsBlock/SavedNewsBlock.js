import React from 'react';
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
        <section className="news" style={props.savedNewsFound || props.noSavedNews ? display : displayNon }>
          <div className="news__found" style={props.noSavedNews ? displayNon : display }>
            <h2 className="news__title">Результаты поиска</h2>
            <div className="news__cards">
            {items.map(card => <NewsCard key={card._id} {...card} {...props}/>)}

            </div>
          </div>
        </section>
    );
}

export default SavedNewsBlock;