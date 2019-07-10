import React from 'react'
import './styles.scss'
import { Col, Row } from 'reactstrap'
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
        <Row>
          <Col>
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgFront})` }}
            >
              <h1>{'<Front-end>'}</h1>
            </div>
          </Col>
          <Col>
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgBack})` }}
            >
               <h1>{'<Back-end>'}</h1>
            </div>
          </Col>
          <Col>
            <div
              className="categorie-body"
              style={{ backgroundImage: `url(${ImgUx})` }}
            >
              <h1>{'<UX/UI>'}</h1>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
