import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import amandaImage from "../../about/staffImages/amanda.jpeg"
import yaleImage from "../../about/staffImages/yale.jpeg"
import madisonImage from "../../about/staffImages/madison.jpeg"
import alexImage from "../../about/staffImages/alex.jpeg"
import graceImage from "../../about/staffImages/grace.jpeg"
import oliviaImage from "../../about/staffImages/olivia.jpeg"
import madieImage from "../../about/staffImages/madie.jpeg"
import lauraImage from "../../about/staffImages/laura.jpeg"
import myleneImage from "../../about/staffImages/mylene.jpeg"
import meghanImage from "../../about/staffImages/meghan.jpeg"
import jadenImage from "../../about/staffImages/jaden.jpeg"
import "./coachingstaff.css"

export default function Coachingstaff() {

  return (
    <div>
      <h1>Competitive and Recreational Coaching Staff</h1>
      <div className="coach-list">

        
        <div>
          <img src={amandaImage} alt="" />
          <h3>Amanda - Competitive Coach</h3>
        </div>
        <div>
          <img src={yaleImage} alt="" />
          <h3>Yale - Competitive Coach</h3>
        </div>
        <div>
          <img src={madisonImage} alt="" />
          <h3>Madison - Recreational Coach</h3>
        </div>
        <div>
          <img src={alexImage} alt="" />
          <h3>Alex - Recreational Coach</h3>
        </div>
        <div>
          <img src={graceImage} alt="" />
          <h3>Grace - Competitve/Excel/Recreational/Private Coach</h3>
        </div>
        <div>
          <img src={oliviaImage} alt="" />
          <h3>Olivia - Excel Coach</h3>
        </div>
        <div>
          <img src={madieImage} alt="" />
          <h3>Madie - Recreational/Private Coach</h3>
        </div>
        <div>
          <img src={lauraImage} alt="" />
          <h3>Laura - Competitive/Excel Coach</h3>
        </div>
        <div>
          <img src={myleneImage} alt="" />
          <h3>Mylene - Recreational Coach</h3>
        </div>
        <div>
          <img src={meghanImage} alt="" />
          <h3>Meghan - Recreational Coach</h3>
        </div>
        <div>
          <img src={jadenImage} alt="" />
          <h3>Jaden - Competitive/Excel/Recreational Coach</h3>
        </div>
      </div>
    </div>
  )
}
