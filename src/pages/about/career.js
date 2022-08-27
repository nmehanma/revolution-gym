import React from "react"
import Layout from "../components/Layout"
import * as styles from "../../styles/career.module.css"

export default function career() {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Come work with us!</h1>
        <div>
          At Revolution, our passion is gymnastics. We strive for a positive
          environment that fosters excitement, passion, and confidence in the
          children that we teach. We want our coaches and staff members to
          experience a comfortable working environment, enjoy learning
          opportunities, and have an all-around positive working experience
        </div>
        <h2>Current Opportunities</h2>
        <a href="/careerDocs/partTime.pdf" title="Download Job" download>
          Part_Time
        </a>
        <p>
          For more information, please contact us at info@revolutiongym.ca, or
          (519) 746-9905.
        </p>
      </div>
    </Layout>
  )
}
