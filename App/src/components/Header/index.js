import React from 'react'
import ImgBusca from '../../assets/g-sozinha.png'
import './styles.scss'

const Header = ({ hide, filter }) => {
  return (
    <div className="header">
      {!hide && <img className="header-image" src={ImgBusca} />}
      <h1>{'<inspiraCode/>'}</h1>
      <h6>Procure por materiais e cursos sobre desenvolvimento</h6>
      <div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <span
              className="nav-item nav-link pointer nav-pill"
              onClick={() => filter('livros')}
            >
              Livros
            </span>
          </li>
          <li class="nav-item">
            <span
              className="nav-item nav-link nav-pill pointer"
              onClick={() => filter('blogs')}
            >
              Blogs
            </span>
          </li>
          <li class="nav-item">
            <span
              className="nav-item nav-link pointer nav-pill"
              onClick={() => filter('groups')}
            >
              Grupos
            </span>
          </li>
          <li class="nav-item">
            <span
              className="nav-item nav-link pointer nav-pill"
              onClick={() => filter('videos')}
            >
              Videos
            </span>
          </li>
          <li class="nav-item">
            <span
              className="nav-item nav-link pointer nav-pill"
              onClick={() => filter('newsletters')}
            >
              Newsletters
            </span>
          </li>
          <li class="nav-item">
            <span
              className="nav-item nav-link pointer nav-pill"
              onClick={() => filter('inspira')}
            >
              inspiraNelas
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
