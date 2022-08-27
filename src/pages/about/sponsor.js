import React from "react"
import century21Image from "../../../public/images/sponsors/century21.jpeg"
import dentalImage from "../../../public/images/sponsors/dental.jpeg"
import lawImage from "../../../public/images/sponsors/dental.jpeg"
import nokoutImage from "../../../public/images/sponsors/dental.jpeg"
import woodwardImage from "../../../public/images/sponsors/woodward.jpeg"
import Layout from "../components/Layout"

export default function sponsor() {
  return (
    <Layout>
      <div>
        <h1>Sponsors!</h1>
        <p>
          Our unique sponsorship opportunities allow for mutually beneficial
          relationships. Your support helps move our organization forward with
          our special events, daily activities and community efforts. In return,
          we proudly display your company information and provide endorsement of
          your products and services to our membership of over _____.
        </p>
        <p>
          If you are interested in being a sponsor please contact Aaron
          Brokenshire at aaronb@revolutiongym.ca
        </p>

        <h2>Current Sponsors</h2>
        <img src={century21Image} alt="" />
        <img src={dentalImage} alt="" />
        <img src={lawImage} alt="" />
        <img src={nokoutImage} alt="" />
        <img src={woodwardImage} alt="" />
      </div>
    </Layout>
  )
}
