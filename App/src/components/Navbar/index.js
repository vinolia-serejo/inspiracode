// import React, { Fragment } from 'react'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap'
// import './styles.scss'

// export default class Barra extends React.Component {
//   constructor(props) {
//     super(props)

//     this.toggle = this.toggle.bind(this)
//     this.state = {
//       isOpen: false
//     }
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     })
//   }
//   render() {
//     return (
//       // <div className="navMenu">
//       //   <Navbar color="light" light expand="md">
//       //     <h4 id="logo">{'<inspiraCode/>'}</h4>
//       //     {this.props.logged ? (
//       //       <Fragment>
//       //         <NavbarToggler onClick={this.toggle} />
//       //         <Collapse isOpen={this.state.isOpen} navbar>
//       //           <Nav className="ml-auto" navbar>
//       //             <NavItem>
//       //               <span onClick={this.props} >Livros</span>
//       //             </NavItem>
//       //             <NavItem>
//       //               <NavLink className="teste" >Grupos</NavLink>
//       //             </NavItem>
//       //             <NavItem>
//       //               <NavLink>Videos</NavLink>
//       //             </NavItem>
//       //             <NavItem>
//       //               <NavLink>Newsletters</NavLink>
//       //             </NavItem>
//       //             <NavItem>
//       //               <NavLink>Blogs</NavLink>
//       //             </NavItem>
//       //             <NavItem>
//       //               <NavLink>inspiraNelas</NavLink>
//       //             </NavItem>
//       //             <NavItem>
//       //               <span onClick={this.props.action}>Sair</span>
//       //             </NavItem>
//       //           </Nav>
//       //         </Collapse>
//       //       </Fragment>
//       //     ) : null}
//       //   </Navbar>
//       // </div>
      
//     // <div>
//     //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     //   <h4 id="logo">{'<inspiraCode/>'}</h4>
//     //             {this.props.logged ?} (
//     //               <Fragment/>
//     //                 <NavbarToggler onClick={this.toggle} />
//     //                 <Collapse isOpen={this.state.isOpen} >
//     //     <a className="navbar-brand" href="#">Navbar</a>
//     //             {this.props.logged ? (
      
//     //       <div className="navbar-nav">
//     //         <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
//     //         <a className="nav-item nav-link" href="#">Features</a>
//     //         <a className="nav-item nav-link" href="#">Pricing</a>
//     //         <a onClick={this.props.action} className="nav-item nav-link" href="#">Sair</a>
//     //     </div>) : null }
//     //   </nav>
//     //     </div>
//     //     )
//     //   }
//     //   )
//     // }
  