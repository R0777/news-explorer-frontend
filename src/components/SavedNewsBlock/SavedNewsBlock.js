import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import {CurrentNewsContext} from '../../contexts/CurrentNewsContext'

const SavedNewsBlock = (props) => {

    const currentUserContext = React.useContext(CurrentUserContext);
    const currentNewsContext = React.useContext(CurrentNewsContext);

    const items = currentNewsContext.map(item => ({
        
        src: item.link,
        _id: item._id,
        owner: item.owner,
        alt: item.name,
        likes: item.likes,
        title: item.name,
        like: item.likes.length,
        cardLiked: item.likes.find((elem) => elem === currentUserContext._id)
    }))

    return (
        <section className="news">
          <div className="news__found">
            <h2 className="news__title">Результаты поиска</h2>
            <div className="news__cards">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
          </div>
        </section>
    );
}

export default SavedNewsBlock;