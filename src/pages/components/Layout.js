import React from "react"
import Navbar from "./Navbar/navbar.js"
import "../../styles/global.css"
import Footer from "./Footer/footer.js"

export default function Layout({ children }) {
  return (
    <>
      <div className="layout-page">
        <div className="navbar-layout">
          <Navbar />
        </div>
        <div className="layout">
          <div className="content">{children}</div>
        </div>
        <div className="footer-layout">
          <Footer />
        </div>
      </div>
    </>
  )
}
