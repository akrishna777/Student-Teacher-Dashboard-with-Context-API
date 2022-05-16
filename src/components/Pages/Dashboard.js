import React, { useContext, useState } from 'react'
import appContext from '../../Contexts/app-contexts'
import Footer from '../Footer'

const Dashboard = () => {
  const { inactive, toggleoff, stuData, teacherData } = useContext(appContext)
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div className="container">
          <h1>Our Statistics</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            reiciendis fuga fugiat, ad labore quasi deleniti? Veniam earum fuga
            doloremque!
          </p>
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-blue order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Total Students</h6>
                  <h2 className="text-right">
                    <i className="fa-solid fa-graduation-cap mx-2"></i>
                    <span>{stuData.length}</span>
                  </h2>
                  <p className="m-b-0">
                    Satisfied Students
                    <span className="f-right">{stuData.length}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-green order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Total Teachers</h6>
                  <h2 className="text-right">
                    <i className="fa-solid fa-person-chalkboard mx-2"></i>
                    <span>{teacherData.length}</span>
                  </h2>
                  <p className="m-b-0">
                    Student Ratings<span className="f-right">8/10</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-yellow order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Courses Subscribed</h6>
                  <h2 className="text-right">
                    <i className="fa-solid fa-credit-card mx-2"></i>
                    <span>122</span>
                  </h2>
                  <p className="m-b-0">
                    Content Rating<span className="f-right">9/10</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-pink order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Active Visitors</h6>
                  <h2 className="text-right">
                    <i className="fa-solid fa-eye mx-2"></i>
                    <span>486</span>
                  </h2>
                  <p className="m-b-0">
                    Completed Orders<span className="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
