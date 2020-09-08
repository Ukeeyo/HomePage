import React from "react"
import "./CSS/text-bubble.css"

const profileImageStyle = {
  borderRadius: "50%",
  width: 100,
  height: 100
}

const ContainerStyle = {
  display: "flex",
  // padding: 5,
  backgroundColor: "rgba(255,255,255,0.5)",
  paddingTop: 25,
  paddingBottom: 40
}
const textBubble = {
  color: "white",
  padding: "1rem",
  backgroundColor: "rgba(0,0,0,0.7)",
  marginTop: "auto",
  borderRadius: 10,
  paddingLeft: 5,
  marginLeft: 10,
  marginRight: "0.5vw"
}

export default class TextBubble extends React.Component {
  render() {
    return (
      <div
        style={{
          ...ContainerStyle,
          ...this.props.style,
          flexDirection: this.props.reverse ? "row-reverse" : "row"
        }}
        className={
          this.props.reverse ? "bubble-container-reverse" : "bubble-container"
        }
      >
        <img
          src={this.props.avatar}
          style={profileImageStyle}
          alt=""
          className={this.props.reverse ? "avatar-reverse" : "avatar"}
        />
        <div style={textBubble} className="text-bubble">
          {this.props.content}
        </div>
      </div>
    )
  }
}
