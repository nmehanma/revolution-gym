import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "./components/Layout"
import * as styles from "../styles/home.module.css"
import ImageCarousel from "./components/ImageCarousel/ImageCarousel"

export default function Home() {

  return (
    <Layout>
      <ImageCarousel  />
      <section className={styles.header}>
        <div>
          <h3>Welcome to Revolution Gymnastics and Sports Centre</h3>
          <h4>
            ​As Kitchener-Waterloo's longest standing gymnastics club owned by
            gymnastics professionals, we offer a complete range of Recreational
            Programs for boys and girls, and a world-class Competitive
            Gymnastics program
          </h4>
          <p>Revolution website new</p>
          <Link className={styles.btn} to="/about">
            My Portfolio Projects
          </Link>
          <h3>Office Hours</h3>
          <table>
            <tr>
              <td>Monday</td>
              <td>11:00 am - 7:00 pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>11:00 am - 7:00 pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>11:00 am - 7:00 pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>11:00 am - 7:00 pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>11:00 am - 7:00 pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>8:30 am - 4:30 pm</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </table>
        </div>
      </section>
    </Layout>
  )
}
