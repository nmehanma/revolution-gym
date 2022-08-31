import React from "react"
import { Link } from "gatsby"
import "./dropdown.css"
import { useState } from "react"

const Dropdown = ({ submenus, updateDropdown, dropdown }) => {
  // console.log(submenus)
  return (
    <ul className={`dropdown${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <div key={index} className="menu-items">
          <Link
            onMouseLeave={() => updateDropdown(prev => !prev)}
            to={`/about/${submenu.url}`}
          >
            {submenu.title}
          </Link>
        </div>
      ))}
    </ul>
  )
}

export default Dropdown
