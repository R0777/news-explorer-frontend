import React, {useState} from 'react';
import './SearchForm.css'




const SearchForm = ({handlSearch, ...props}) => {

  const [data, setData] = useState({
    search: '',
  });
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { search } = data;
    handlSearch(search);
  }

    return (
      <section className="search">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form method="post" className="search__form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="search" 
            id="search" 
            className="search__input" 
            placeholder="Поиск"
            onChange={handleChange} 
            required />
          <button type="submit" className="search__button">Искать</button>
        </form>
      </section>
    );
}

export default SearchForm;