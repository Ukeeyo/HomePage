import React from "react"
import "./CSS/text-bubble.css"

const profileImageStyle = {
  borderRadius: "50%",
  width: 100,
  height: 100
}

const ContainerStyle = {
  display: "flex",
  // backgroundColor: "rgba(255,255,255,0.5)",
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
    const { style, reverse, avatar, content } = this.props
    return (
      <div
        style={{
          ...ContainerStyle,
          ...style,
          flexDirection: reverse ? "row-reverse" : "row"
        }}
        className={reverse ? "bubble-container-reverse" : "bubble-container"}
      >
        <img
          src={avatar}
          style={profileImageStyle}
          alt=""
          className={reverse ? "avatar-reverse" : "avatar"}
        />
        <div style={textBubble} className="text-bubble">
          {content}
        </div>
      </div>
    )
  }
}
