import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Welcome to Revolution Gymnastics and Sports Centre</h3>
          <h4>​As Kitchener-Waterloo's longest standing gymnastics club owned by gymnastics professionals, we offer a complete range of Recreational Programs for boys and girls, and a world-class Competitive Gymnastics program</h4>
          <p>Revolution website new</p>
          <Link className={styles.btn} to="/about">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}
