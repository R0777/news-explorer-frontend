import React from 'react';
import './SavedNewsHeader.css'
import {CurrentSavedNewsContext} from '../../contexts/CurrentSavedNewsContext'

const display = {
  display: 'block',
}
const displayNon = {
  display: 'none',
}

const SavedNewsHeader = (props) => {

  const currentSavedNewsContext = React.useContext(CurrentSavedNewsContext);

  const articles = currentSavedNewsContext.length


    return (
      <section className="yournews">
        <p className="yournews__text">Сохранённые статьи</p>
        <h2 className="yournews__title">{props.userData.name}, у вас {(articles === 0) ? 'нет' : articles} сохранённых статей</h2>
        <p className="yournews__keywords" style={(props.array[0] !== undefined) ? display : displayNon}>По ключевым словам: <span className="younews__topic">{(props.array[0] !== undefined) && props.array[0].keyword}, {(props.array[1] !== undefined) && props.array[1].keyword } </span> <span
          className="younews__topic-numb" style={(props.array[2] !== undefined) ? display : displayNon}>{(props.array[2] !== undefined) && 'и другим' }</span></p>
      </section>
    );
}

export default SavedNewsHeader;