import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Hello World</h1>
          <h2>Develop and Deploy</h2>
          <p>Revolution website new</p>
          <Link className={styles.btn} to="/about">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}
