import React from 'react'
import ImgBusca from '../../assets/g-sozinha.png'
import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src={ImgBusca} />
      <h1>{'<inspiraCode/>'}</h1>
      <h6>Procure por materiais e cursos sobre desenvolvimento</h6>
      <div className="header-search">
        <i className="fas fa-search" />
        <input
          onKeyUp={event => this.onSearch(event)}
          placeholder="Busque por: Front-end"
        />
      </div>
    </div>
  )
}
export default Header
