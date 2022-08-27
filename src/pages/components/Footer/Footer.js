import React from "react"
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa"
import "./footer.css"

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Copyright 2022 Revolution Gymnastics</p>
      </div>
      <div className="social-icons">
        <p>Reach out to us on our different platforms!</p>
        <a href="https://www.facebook.com/RevGymCanada">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/revgymcanada/">
          <FaInstagram />
        </a>
        <a href="mailto:info@revolutiongym.ca">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  )
}
