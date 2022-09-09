import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./navbar.css"
import logo from "../../../../public/images/logo.png"

// import Nav from "react-bootstrap/Nav"
// import NavDropdown from "react-bootstrap/NavDropdown"
// import Navbar from "react-bootstrap/Navbar"
// import * as styles from "../../../styles/navbar.module.css"
import MenuItems from "../MenuItems/MenuItems"

export default function Navbar() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              title
              url
              submenu {
                title
                url
              }
            }
          }
        }
      }
    `
  )

  const menuLinks = data.site.siteMetadata.menuLinks

  return (
    <nav>
      <Link to="/">
        <h1>Revolution Gymnastics</h1>
      </Link>
      <div className="menus">
        {menuLinks.map((menu, index) => {
          console.log(menu, index)
          return <MenuItems items={menu} key={index} />
        })}
      </div>
    </nav>
  )
}
