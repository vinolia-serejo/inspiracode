import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <footer className="fdb-block footer-large mt-5">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h3>{'<inspiraCode/>'}</h3>
            <p>
              Projeto desenvolvido como trabalho de conclusão de curso na{' '}
              {'{reprograma}'}
            </p>
            <p>
              Ilustrações por{' '}
              <a target="_blank" href="https://undraw.co">
                unDraw
              </a>
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="lead">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100008750678287" className="mx-2">
                <i className="fab fa-facebook social-icons" aria-hidden="true" />
              </a>
              <a target="_blank" href="https://www.instagram.com/vivisserejo" className="mx-2">
                <i className="fab fa-instagram social-icons" aria-hidden="true" />
              </a>
              <a target="_blank" href="www.linkedin.com/in/vinolia-serejo" className="mx-2">
                <i className="fab fa-linkedin social-icons" aria-hidden="true" />
              </a>
              <a href="mailto:vinolia.serejo@gmail.com" className="mx-2">
                <i className="fas fa-envelope social-icons" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
