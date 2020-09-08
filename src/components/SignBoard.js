import React from "react"
import "./CSS/sign-board.css"

const container = {
  color: "white",
  display: "flex",
  backgroundColor: "rgba(0,0,0,0.8)",
  borderRadiusBottom: "30%",
  padding: 15,
  paddingLeft: 50
}

const subTitleStyle = {
  paddingLeft: 50,
  marginTop: "auto"
}

export default class TextBubble extends React.Component {
  render() {
    const containerStyle = this.props.style
      ? { ...container, ...this.props.style }
      : container
    return (
      <div style={containerStyle}>
        <div>
          <div className="sign-board-title">{this.props.title}</div>
          <div style={subTitleStyle} className="sign-board-sub-title">
            {this.props.subTitle}
          </div>
        </div>
      </div>
    )
  }
}
