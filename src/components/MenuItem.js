import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuItem = ({ name, subMenus, icon, onClick, to }) => {
  const [expand, setExpand] = useState(false)
  return (
    <li onClick={onClick}>
      <NavLink to={to} onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">
          <i className={icon}></i>
        </div>
        <span>{name}</span>
        {subMenus && subMenus.length > 0 ? (
          <div className="downarrow">
            <i className="bi bi-chevron-down"></i>
          </div>
        ) : null}
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? 'active' : ''}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default MenuItem
