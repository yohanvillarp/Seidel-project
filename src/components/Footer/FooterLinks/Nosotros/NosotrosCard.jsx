import React from 'react'
import './NosotrosCard.css';

const NosotrosCard = ({title, contenido, classIcon}) => {
  return (
    <article className="nosotrosCard">

      <header className="nosotrosCard__title">
        <i className={classIcon}></i>
        <h1 className="nosotrosCard__title--text">{title}</h1>
      </header>
      <hr className="nosotrosCard__separator"></hr>
      <section className="nosotrosCard__body">
        <p className="nosotrosCard__body--text">{contenido}</p>
      </section>
    </article>
    
  )
}

export default NosotrosCard