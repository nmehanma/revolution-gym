import React from "react"
import Layout from "../components/Layout"
import compChartImage from "../../../public/images/competitive/competitivemobilitychart.jpeg"

export default function competitive() {
  return (
    <div>
      <Layout>
        <div>
          <h1>Competitive Program Information</h1>
          <h2>Team Overview</h2>
          <h3>Girls Excel</h3>
          <p>
            The Excel Teams is for girls Ages 6 and up (Excel Jr. and Sr.),
            training 2 days/week, 1.5 hours/training session for a total of 3
            hours/week. All excel members will participate in a year-end
            "In-house" competition. This event is not judged and is a strictly
            fun day where the gymnasts get to show off all they have been
            working on through out the year. Commitment is required for 1
            gymnastics season.
          </p>
          <h3>Travel Team:</h3>
          <p>
            The Travel Team is designed for gymnasts age 8+, training 20 hours
            per week. In order to be eligible to be part of the Travel Team,
            gymnasts must be attain a minimum of Level 7 requirements. Girls on
            the Travel Team are eligible to compete in 4 competitions per year
            in Canada and the USA.
          </p>
          <h3>Super Boys:</h3>
          <p>
            This advanced and more challenging program is designed for the child
            who has a desire to spend more time doing gymnastics or for any
            gymnast working on levels 4 to 8 and beyond. As the skill level
            increases, it is essential that more time is spent practicing. There
            are 2 Super Boys programs - 90 min, 2 times per week and 3 hrs, 2
            times per week.
          </p>
          <h3>Elite Team:</h3>
          <p>
            The Elite Team is for National Level (Aspire, Novice, Junior and
            Senior) athletes ages 10+, training 25+ hours per week. Girls are
            eligible to compete in 4+ competitions per year in Canada and
            Internationally.
          </p>
          <h3>Progressive Teams:</h3>
          <p>
            The Progressive Team is designed for gymnasts ages 6-8, training
            6-20 hours per week. Girls in these groups are eligible to work
            towards the opportunity to participate in 1-3 competitions per year
            in the GTA.
          </p>
          <h3>Invitational Teams:</h3>
          <p>
            The Invitational Teams are designed for gymnasts ages 7+, training 6
            or 12 hours per week. Girls in these groups are eligible to compete
            in 1-3 competitions per year in the GTA.
          </p>

          <h2>Training Duration</h2>

          <p>
            The Competitive Programs run on 10 - 12 month training schedules.
            Once selected into the program, each athlete is placed into a group
            based on factors that include age, ability, and skill level. Every
            gymnast is carefully placed in a group where, in the opinion of the
            coaches, they will be challenged without feeling overwhelmed and
            will best progress to attain success. Gymnasts in these programs
            train in between 3 and 30 hours/week.
          </p>
          <p>
            As gymnasts progress in their development, training hours may also
            increase to allow for further physical and skill development while
            decreasing the risk of injury. The more advanced skills require body
            conditioning and physical preparation. As such, an 8 year old
            gymnast may train up to 16+ hours/week and an elite level
            accomplished gymnast (12+ years) may train up to 30 hours/week.
          </p>
          <p>
            A note about elite level training: Out of 1000 Recreational
            participants, less than 5 will progress to the Elite level. Only a
            few kids have the physical, emotional, and psychological
            characteristics (focus, determination, competitive spirit, hard work
            ethic, patience, etc.) that are required for elite gymnastics. At
            Revolution, it is the coaches role to assist each gymnast in
            reaching her maximum potential with the realization that each
            gymnast is ultimately responsible for hew own progress, and
            ultimately, her own success.
          </p>
          <h3>Competitive Program Mobility Chart</h3>

          <img src={compChartImage} alt=""></img>
          

          <h2>
            <a
              href="https://revolutiongym.uplifterinc.com/registration/"
              target="_blank"
              rel="noreferrer"
            >
              Ready to register? Click Here!
            </a>
          </h2>
        </div>
      </Layout>
    </div>
  )
}
