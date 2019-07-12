import React from 'react'
import './styles.scss'

const Cards = ({ conteudo }) => {
  return (
    <div className="cards">
      <div className="cards-row">
        {conteudo.map(item => {
          return (
            <a className="link-externo" target="_blank" href={item.link}>
              <div className="card" style={{ width: 18 + 'rem' }}>
                <img
                  src={require(`../../assets/${item.type}.png`)}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="row">{item.title}</h5>
                  <p className="card-text row">{item.about}</p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Cards
