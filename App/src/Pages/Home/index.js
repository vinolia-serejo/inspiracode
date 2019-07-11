import React from 'react'
import Navbar from '../../components/Navbar'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import dados from '../../data/database.json'

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      grupos: dados.groups,
      videos: dados.videos,
      news: dados.newsletters,
      blogs: dados.blogs,
      inspira: dados.inspira,
      livros: dados.books
    }
  }

  render() {
    return (
      <div className="Home">
        <Navbar logged={true} action={this.props.action} />
        <Header />
        <Content>
          <Categories />
        </Content>
        <Cards conteudo={this.state.videos} />
        <Footer />
      </div>
    )
  }
}
