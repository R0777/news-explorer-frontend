import React from 'react';
import './SearchForm.css'

const SearchForm = () => {
    return (
      <section className="search">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form action="" method="post" className="search__form">
          <input type="text" name="" id="" className="search__input" placeholder="Поиск" />
          <button type="submit" className="search__button">Искать</button>
        </form>
      </section>
    );
}

export default SearchForm;