import React from "react"
import { Link } from "gatsby"
import "./dropdown.css"
import { useState } from "react"

const Dropdown = ({ subMenus, updateDropdown, dropdown, items }) => {
  // console.log(items.url)
  return (
    <ul className={`dropdown${dropdown ? "show" : ""}`}>
      {subMenus.map((subMenu, index) => (
        <div key={index} className="menu-items">
          <Link
            onMouseLeave={() => updateDropdown(prev => !prev)}
            to={`${items.url}/${subMenu.url}`}
          >
            {subMenu.title}
          </Link>
        </div>
      ))}
    </ul>
  )
}

export default Dropdown
