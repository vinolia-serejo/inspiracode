import React from 'react'
import Navbar from '../../components/Navbar'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'

const Home = ({ action }) => {
  return (
    <div className="Home">
      <Navbar logged={true} action={action} />
      <Header />
      <Content>
        <Categories />
      </Content>
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
