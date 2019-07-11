
import React, { Fragment } from 'react'
import './styles.scss'

export default class Barra extends React.Component {
    constructor(props) {
      super(props)
  
      this.toggle = this.toggle.bind(this)
      this.state = {
        isOpen: false
      }
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }

render(){
return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
      <a onClick={this.props.action} className="nav-item nav-link" href="#">Sair</a>
    </div>
  </div>
</nav>
  )
}
}