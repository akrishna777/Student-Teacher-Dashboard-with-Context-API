import React, { useContext, useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import logo from '../../assets/TechCademy-logos.jpeg'
import homeImage from '../../assets/homeImage.jpg'
import Footer from '../Footer'

import AppContext from '../../Contexts/app-contexts'

const Home = () => {
  const { inactive, toggleoff } = useContext(AppContext)
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        {/* <h1>This is HOMEPAGE</h1> */}

        <div className="container">
          <div className="heading d-flex my-2">
            <h1 style={{ fontFamily: 'Arvo' }}>Welcome to Techcademy</h1>
            <img
              src={logo}
              style={{ width: '50px', height: '50px', marginLeft: '10px' }}
            />
          </div>
          <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
            <p>
              “It’s not that we use technology, we live technology.” – Godfrey
              Reggio
              <br />
              Looking to create a career in tech or just enhance your tech
              skills? You're at the right place. Nam repellat cupiditate rerum
              quaerat, illum sed ut voluptas nostrum dolor adipisci distinctio.
              Vero qui accusantium, eligendi officia, tenetur, veritatis quaerat
              aut quo molestias iste esse sint doloremque voluptatum explicabo
              dolorem. Tempora nisi velit consequatur voluptatem quae!
            </p>
            <img src={homeImage} id="homeImage" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
