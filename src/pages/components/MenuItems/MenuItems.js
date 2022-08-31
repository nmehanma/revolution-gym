import React from "react"
import Dropdown from "../Dropdown/Dropdown"
import { Link } from "gatsby"
import "./menuItems.css"

import { useState } from "react"

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false)
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  const updateDropdown = title => {
    setDropdown(title)
  }

  return (
    <div className="menu-items">
      {items.submenu ? (
        <>
          <Link
            aria-expanded={dropdown ? "true" : "false"}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            to={items.url}
          >
            {items.title}
          </Link>
          {
            <Dropdown
              updateDropdown={updateDropdown}
              items = {items}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          }
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </div>
  )
}

export default MenuItems
