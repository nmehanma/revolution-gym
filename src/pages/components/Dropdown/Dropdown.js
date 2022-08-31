import React from "react"
import { Link } from "gatsby"
import "./dropdown.css"
import { useState } from "react"

const Dropdown = ({ submenus, updateDropdown, dropdown, items }) => {
  console.log(items.url)
  return (
    <ul className={`dropdown${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        console.log(submenu),
        <div key={index} className="menu-items">
          <Link
            onMouseLeave={() => updateDropdown(prev => !prev)}
            to={`${items.url}/${submenu.url}`}
          >
            {submenu.title}
          </Link>
        </div>
      ))}
    </ul>
  )
}

export default Dropdown
