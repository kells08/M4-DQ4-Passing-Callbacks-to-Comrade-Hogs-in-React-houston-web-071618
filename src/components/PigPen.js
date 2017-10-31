import React from "react"
import Pig from "./Pig.js"
import GalaxySNote7 from "./GalaxySNote7.js"
import exclaim from '../assets/exclaim.mp3';


const pigs = [
  "Sobriety",
  "Trouble",
  "Cherub",
  "MasterBlaster"
]

export default class PigPen extends React.Component {
  constructor() {
    super()
    this.state = {
      environment: "docile"
    }
    this.audio = new Audio(exclaim);

  }

  alterEnvironment = (vibe) => {
    const newState = {environment: vibe}
    if (vibe === "inhospitable")
      this.audio.play()
    this.setState(newState)
    setTimeout(() => {
      const resetState = {environment: "docile"}
      this.setState(resetState)
    }, 2000)
  }

  generateSheeple = () => {
    return pigs.map((name, idx) => (
      <Pig key={idx} id={name} name={name} environment={this.state.environment} />
    ))
  }

  render() {
    const sheeple = this.generateSheeple()
    return(
      <div id="pig-pen">
        {sheeple}
        <GalaxySNote7 environment={this.state.environment} alterEnvironment={this.alterEnvironment} />
      </div>
    )
  }
}
