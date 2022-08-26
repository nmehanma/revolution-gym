import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>Revolution Gymnastics</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/camp">Camps</Link>
        <Link to="/camp">Competitive</Link>
        <Link to="/event">Events</Link>
        <Link to="/recreational">Recreational</Link>
      </div>
    </nav>
  )
}
