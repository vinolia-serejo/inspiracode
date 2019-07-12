import React, { Fragment } from 'react'
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
      category: '',
      content: dados.books,
      hideHeaderImage: false
    }
  }

  filterByCategory = category => {
    let content
    let hideHeaderImage
    switch (category) {
      case 'livros':
        content = dados.books
        hideHeaderImage = true
        break
      case 'blogs':
        content = dados.blogs
        hideHeaderImage = true
        break
      case 'groups':
        content = dados.groups
        hideHeaderImage = true
        break
      case 'videos':
        content = dados.videos
        hideHeaderImage = true
        break
      case 'newsletters':
        content = dados.newsletters
        hideHeaderImage = true
        break
      case 'inspira':
        content = dados.inspira
        hideHeaderImage = true
        break

      default:
        content = ''
        hideHeaderImage = false
        break
    }
    this.setState({ category, content, hideHeaderImage })
  }

  render() {
    const logout = this.props.action
    const { category, content, hideHeaderImage } = this.state
    console.log(this.state.category)

    return (
      <div className="Home">
        <Navbar logged={true} action={logout} />
        <Header hide={hideHeaderImage} filter={this.filterByCategory} />
        {!category && (
          <Fragment>
            <Content>
              <Categories />
            </Content>
          </Fragment>
        )}
        {category && <Cards conteudo={content} />}
        <Footer />
      </div>
    )
  }
}
