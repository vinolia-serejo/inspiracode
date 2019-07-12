import React from 'react'
import './styles.scss'
import ImgFront from '../../assets/web_development.png'
import ImgBack from '../../assets/back-end.png'
import ImgUx from '../../assets/undraw_wireframing_nxyi.png'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="categorie">
        <div className="row">
          <div className="col">
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgFront})` }}
            >
              <p>texto front </p>
              <h1>{'<Front-end>'}</h1>
            </div>
          </div>
          <div className="col">
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgBack})` }}
            >
              <p>texto back </p>
              <h1>{'<Back-end>'}</h1>
            </div>
          </div>
          <div className="col">
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgUx})` }}
            >
              <p>texto ux/ui </p>
              <h1>{'<UX/UI>'}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
