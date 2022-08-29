import { Link } from "gatsby"
import React from "react"
import "./navbar.css"

// import Nav from "react-bootstrap/Nav"
// import NavDropdown from "react-bootstrap/NavDropdown"
// import Navbar from "react-bootstrap/Navbar"
import * as styles from "../../../styles/navbar.module.css"
import { menuItems } from "../../../menuItems"
import MenuItems from "../MenuItems/MenuItems"

export default function navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Revolution Gymnastics</h1>
      </Link>
      <div className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />
        })}
      </div>
    </nav>
  )
}
