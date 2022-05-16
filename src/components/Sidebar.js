import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/TechCademy-logos.jpeg'
import user from '../assets/profile.png'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

import AppContext from '../Contexts/app-contexts'

const menuItems = [
  { name: 'Home', to: '/', icon: 'fa-solid fa-house' },
  { name: 'Dashboard', to: '/dashboard', icon: 'bi bi-speedometer2' },
  {
    name: 'Students',
    to: '/students',
    subMenus: [{ name: 'Manage Students', to: '/students/ManageStudents' }],
    icon: 'fa-solid fa-user-graduate',
  },
  {
    name: 'Teachers',
    to: '/teachers',
    subMenus: [{ name: 'Manage Teachers', to: '/teachers/ManageTeachers' }],
    icon: 'fa-solid fa-person-chalkboard',
  },
]

const Sidebar = () => {
  const {
    inactive,
    setInactive,
    toggleoff,
    setToggleoff,
    onCollapse,
    onToggleOff,
  } = useContext(AppContext)

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu').forEach((el) => {
        el.classList.remove('active')
      })
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth < 768) {
        setInactive(true)
      } else {
        setInactive(false)
      }
    })

    window.addEventListener('resize', function () {
      if (window.innerWidth < 496) {
        setToggleoff(true)
      } else {
        setToggleoff(false)
      }
    })

    onCollapse(inactive)
    onToggleOff(toggleoff)
  }, [inactive, toggleoff])

  return (
    <div
      className={`side-menu ${inactive ? 'inactive' : ''} ${
        toggleoff ? 'toggleoff' : ''
      }`}
    >
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="school-logo" />
        </div>
        <h3>TechCademy</h3>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus}
              icon={menuItem.icon}
              onClick={() => {
                if (inactive) {
                  setInactive(false)
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
        {inactive ? (
          <i className="bi bi-arrow-right-square-fill"></i>
        ) : (
          <i className="bi bi-arrow-left-square-fill"></i>
        )}
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>James Harisson</h5>
          <p>harrissonj@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
