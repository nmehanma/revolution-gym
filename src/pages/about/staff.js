import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import angelaImage from "./staffImages/angela.jpeg"
import amandaImage from "./staffImages/amanda.jpeg"
import cassidyImage from "./staffImages/cassidy.jpeg"
import stefanieImage from "./staffImages/stefanie.jpeg"
import * as styles from "../../styles/staff.module.css"
import Coachingstaff from "../components/CoachingStaff/CoachingStaff"
import "../../styles/staff.css"

export default function Staff() {
  // let dataTrack = data.staffPhotos.edges.map(image =>
  //   image.node.base === "angela.jpeg"
  //     ? console.log("true")
  //     : console.log("false")
  // )

  // console.log(dataTrack)

  return (
    <Layout>
      <div>
        <h1>Staff</h1>
        <div className={styles.layout}>
          <StaticImage src={"../../data/staffImages/aaron.jpeg"} />

          {/* <img src={aaronImage} alt="" /> */}
          <h3>Aaron Brokenshire</h3>
          <p>
            Aaron Brokenshire –Master Coach- NCCP Level 4 Aaron has over two
            decades of experience as a successful coach and business owner.
            Aaron has obtained his full Level 4 NCCP, and graduated from the
            ‘Advanced Coaching Techniques with Artistic Gymnastics program at
            Seneca College. Aaron’s international assignments have brought him
            around the globe and include Japan, China, Belgium, Italy, France,
            USA, Brazil, Germany, Scotland, Russia, and Portugal. Some
            professional achievements include producing six Canadian National
            Team Members, and National Champions. Aaron has coached athletes who
            have attended Youth Olympic Games, Pan-American Championships,
            Commonwealth Games, Pacific Rim, Olympic Trials, and World
            Championships.
          </p>
          <StaticImage src={"../../data/staffImages/angela.jpeg"} />
          {/* <img src={angelaImage} alt="" /> */}
          <h3>Angela Brokenshire - Director</h3>
          <p>
            Angela was an International gymnast in the early 1990s, competing
            abroad for our country in France, Cuba and the United States. She
            was the Canadian National Beam champion and Elite Canada Junior
            All-Around silver medallist in 1990. Angela's proficiency comes in
            part through 20+ years of gymnastics experience (many at an elite
            level), 10 years of coaching and full NCCP Level III certification.
            Brock University education in Exercise and Sports Management has
            been a tremendous asset to Angela in our venture. Angela is
            certified in standard first aid and CPR. Outside of the gym Angela
            enjoys travel, golf, photography and dance.
          </p>
          <StaticImage src={"../../data/staffImages/cassidy.jpeg"} />
          {/* <img src={cassidyImage} alt="" /> */}
          <h3>Cassidy Volmer - Competitive Manager</h3>
          <p>
            Cassidy has been a part of our competitive team for the past two
            seasons. She was a member of our competitive team and coaching staff
            for many years. Cassidy has 9 years of coaching experience with all
            levels of gymnasts in the JO program and has worked with competitive
            power tumblers. She specializes in pre-comp development and enjoys
            teaching strong basics. In her free time, she enjoys traveling and
            spending time with her dog, Mazie.
          </p>
          <StaticImage src={"../../data/staffImages/stefanie.jpeg"} />
          {/* <img src={stefanieImage} alt="" /> */}
          <h3>Stefanie Merkle - Excel/Boys Program Manager </h3>
          <p>
            Stefanie has been part of our competitive staff for the past 3
            seasons. She was a member of our elite performance team from
            2006-2014 and was coached by Aaron and Angela. As a member of the
            Canadian National Team, she represented her country on many
            International assignments and world cup events. Stefanie was also a
            member of the 2014 Commonwealth Games Team where she made the event
            finals on the floor. Stefanie brings a wealth of experience and
            knowledge to our program. She has returned home from a successful
            NCAA career with the Ohio State Buckeyes where she also earned a
            sports industry degree. In her free time, Stefanie enjoys staying
            active and spending time with her family.
          </p>
          <StaticImage src={"../../data/staffImages/amanda.jpeg"} />
          {/* <img src={amandaImage} alt="" /> */}
          <h3>Amanda Bowes - Competitive Coach </h3>
          <p>
            Stefanie has been part of our competitive staff for the past 3
            seasons. She was a member of our elite performance team from
            2006-2014 and was coached by Aaron and Angela. As a member of the
            Canadian National Team, she represented her country on many
            International assignments and world cup events. Stefanie was also a
            member of the 2014 Commonwealth Games Team where she made the event
            finals on the floor. Stefanie brings a wealth of experience and
            knowledge to our program. She has returned home from a successful
            NCAA career with the Ohio State Buckeyes where she also earned a
            sports industry degree. In her free time, Stefanie enjoys staying
            active and spending time with her family.
          </p>
        </div>
      </div>
      <Coachingstaff />
    </Layout>
  )
}
