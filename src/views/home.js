import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Usable Flickering Kingfisher</title>
        <meta property="og:title" content="Usable Flickering Kingfisher" />
      </Helmet>
      <input
        type="text"
        placeholder="placeholder"
        className="home-textinput input"
      />
      <button type="button" className="home-button button">
        Button
      </button>
    </div>
  )
}

export default Home
