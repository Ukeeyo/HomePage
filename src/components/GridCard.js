import React from "react"

const cardStyle = {
  padding: "1rem",
  display: "flex",
  flexDirection: "column"
}

const imgStyle = {
  height: 100,
  width: 100,
  borderRadius: 25
}

const nameStyle = {
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white",
  textAlign: "center",
  marginTop: 5,
  borderRadius: 25
}

export default class Grid extends React.Component {
  render() {
    const { img, name } = this.props
    return (
      <div style={cardStyle}>
        <img style={imgStyle} src={img} alt="" />
        <div style={nameStyle}>{name}</div>
      </div>
    )
  }
}
