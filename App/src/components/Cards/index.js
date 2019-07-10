import React from 'react'
import './styles.scss'
import { Col, Row} from 'reactstrap'

export default class Cards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cards">
        <Row>
          <Col>
            <div className="card-body">
              <h1>blablabla</h1>
            </div>
          </Col>
          <Col>
            <div className="card-body">
              <h1>blablabla</h1>
            </div>
          </Col>
          <Col>
            <div className="card-body">
              <h1>blablabla</h1>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

