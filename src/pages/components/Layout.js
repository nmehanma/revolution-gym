import React from "react"
import Navbar from "./Navbar/navbar.js"
import "../../styles/global.css"
import Footer from "./Footer/footer.js"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
