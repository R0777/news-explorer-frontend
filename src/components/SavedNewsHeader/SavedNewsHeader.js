import React from 'react';
import './SavedNewsHeader.css'

const SavedNewsHeader = () => {
    return (
      <section className="yournews">
        <p className="yournews__text">Сохранённые статьи</p>
        <h2 className="yournews__title">Грета, у вас 5 сохранённых статей</h2>
        <p className="yournews__keywords">По ключевым словам: <span className="younews__topic">Природа, Тайга</span> и <span
          className="younews__topic-numb">2-м другим</span></p>
      </section>
    );
}

export default SavedNewsHeader;