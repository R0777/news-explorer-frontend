import React from 'react';
import notFound from '../../images/svg/not-found.svg'

const Nonews = (props) => {

  const display = {
    display: 'flex',
  }
  const displayNon = {
    display: 'none',
  }

return(
			<div className="news__nonews" style={ props.noNews ? display : displayNon }>
        <img src={notFound} alt="Ничего не нашлось" className="news__nonews-pic" />
        <h3 className="nonews__title">Ничего не найдено</h3>
        <p className="nonews__text">К сожалению по вашему запросу ничего не найдено.</p>
      </div>
)

}
export default Nonews;