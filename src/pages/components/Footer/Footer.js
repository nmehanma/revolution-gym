import React from "react"
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <p>Copyright 2022 Revolution Gymnastics</p>
      <a href="https://www.facebook.com/RevGymCanada">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/revgymcanada/">
        <FaInstagram />
      </a>
      <a href="mailto:info@revolutiongym.ca">
        <FaEnvelope />
      </a>
      
    </footer>
  )
}
