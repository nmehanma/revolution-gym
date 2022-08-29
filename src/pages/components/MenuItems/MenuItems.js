import React from "react"
import Dropdown from "../Dropdown/Dropdown"
import { Link } from "gatsby"
import "./menuItems.css"

import { useState } from "react"

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false)

  const updateDropdown = title => {
    setDropdown(title)
  }

  return (
    <div className="menu-items">
      {items.submenu ? (
        <>
          <Link
            aria-expanded={dropdown ? "true" : "false"}
            onMouseEnter={() => setDropdown(prev => !prev)}
            to={items.url}
          >
            {items.title}
          </Link>
          {/* {items.title}{" "} */}
          {/* </button> */}
          <Dropdown
            updateDropdown={updateDropdown}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </div>
  )
}

export default MenuItems
