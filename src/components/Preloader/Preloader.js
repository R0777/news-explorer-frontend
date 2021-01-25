import React from 'react'

const Preloader = (props) => {

  const display = {
    display: 'block',
  }
  const displayNon = {
    display: 'none',
  }

return(
  <div className="news__seaching" style={props.searching ? display : displayNon}>
    <div className="news_seaching-preloader"></div>
    <p className="news__searching-text">Идет поиск новостей...</p>
  </div>
)

}
export default Preloader;