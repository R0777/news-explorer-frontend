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

  const getArray = (array) => {
    let keyWordArray = []
    array.map(e => keyWordArray.push(e.keyword))
    let uniqueWords = [];
    for (let str of keyWordArray) {
        if (!uniqueWords.includes(str)) {
          uniqueWords.push(str);
        }
      }
        return uniqueWords
    }
const bigArray = (uniqueArray) => {
if (uniqueArray.length > 2) {
  let bigArray = uniqueArray.slice(2,(uniqueArray.length + 1))
  return bigArray.length
}
return
}

    return (
      <section className="yournews">
        <p className="yournews__text">Сохранённые статьи</p>
        <h2 className="yournews__title">{props.userData.name}, у вас {(articles === 0) ? 'нет' : articles} {(articles === 1) && 'сохранённая статья' } {(articles >= 2 && articles <= 4) && 'сохранённых статьи'} {(articles >= 5 || articles === 0) && 'сохранённых статей'}</h2>
        <p className="yournews__keywords" style={ getArray(props.array).length !== 0 ? display : displayNon}>По {(getArray(props.array).length === 1) ? 'ключевому слову:' : 'ключевым словам:'}<span className="younews__topic"> {(getArray(props.array)[0] !== undefined) && getArray(props.array)[0]} {(getArray(props.array)[1] !== undefined) && ', '}{(getArray(props.array)[1] !== undefined) && getArray(props.array)[1]} </span> <span
          className="younews__topic-numb" style={(getArray(props.array)[2] !== undefined) ? display : displayNon}>{(getArray(props.array)[2] !== undefined) && `и ${bigArray(getArray(props.array))} ${bigArray(getArray(props.array)) === 1 ? 'другому' : 'другим'}` }</span></p>
      </section>
    );
}

export default SavedNewsHeader;