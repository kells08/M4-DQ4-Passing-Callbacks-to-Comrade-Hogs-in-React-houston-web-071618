import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: (this.props.environment === "inhospitable")
    }
    this.squeelAudio = new Audio(wreee);
    this.squeelAudio.addEventListener("ended", () => this.props.alterEnvironment("inhospitable"), false)
    this.exclaimAudio = new Audio(exclaim);
  }

  squeel = () => {
    this.setState({panicked: true})
    this.exclaimAudio.play()
    this.squeelAudio.play()
    // this.props.alterEnvironment("inhospitable")
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    console.log(this.props)
    return(
      <div id="galaxy-s-note" onClick={this.squeel}>
        {(this.props.environment === "inhospitable" || this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
