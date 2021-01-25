import React from 'react'

const Nonews = (props) => {

  const display = {
    display: 'block',
  }
  const displayNon = {
    display: 'none',
  }

return(
			<div className="news__nonews">
        <img src="./images/svg/not-found.svg" alt="" className="news__nonews-pic" />
        <h3 className="nonews__title">Ничего не найдено</h3>
        <p className="nonews__text">К сожалению по вашему запросу ничего не найдено.</p>
      </div>
)

}
export default Nonews;