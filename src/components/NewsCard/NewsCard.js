import React from 'react';
import { Link } from 'react-router-dom'
import './NewsCard.css'

const display = {
  visibility: 'visible',
}
const displayNon = {
  visibility: 'hidden',
}


const NewsCard = (props) => {

  function handleSaveClick() {
    props.handleSaveNews(props)
}

function handleDeleteClick() {
    props.handleDeleteCard(props)
}

const classCheck = () => {
  if (props.location.pathname !== '/saved-news' && props.saved !== undefined) {

  return 'news__card-flag-blue'
  }
  else if (props.location.pathname !== '/saved-news' && props.saved === undefined) {
    return 'news__card-flag'
  }
  else return 'news__card-flag-trash'
  }

    return (

      <figure className={`news__card ${props.index >= 3 && 'hidden'}`}>
        <img src={props.img} alt={props.alt} className="news__card-pic"/>
          <div className="news__card-utils">
            <p className="news__card-topic" style={props.location.pathname === '/saved-news' ? display : displayNon }>{props.keyword}</p>
            <button className={classCheck()} onClick={props.location.pathname === '/saved-news' ? handleDeleteClick : handleSaveClick }></button>
            <p className="news__card-info" style={props.loggedIn ? displayNon : display}>Войдите, чтобы сохранять статьи</p>

          </div>
        <Link to={{ pathname:props.url }} target="_blank" className="news__caption-link"><figcaption className="news__caption">
          <p className="news__card-date">{props.location.pathname === '/saved-news' ? props.createdAt.slice(0, 10) : props.date && props.date.slice(0, 10)}</p>
          <h4 className="news__card-title">{props.title}</h4>
          <p className="news__card-text">{props.description}</p>
          <p className="news__card-src">{props.source}</p>
        </figcaption></Link>
      </figure>
    );
}

export default NewsCard;