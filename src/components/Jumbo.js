import React from "react"
import { Jumbotron, Image } from "react-bootstrap"

const style = {
  backgroundColor: `rgba(0, 0, 0, 0.7`,
  color: "white",
  textAlign: "center"
}

class Jumbo extends React.Component {
  render() {
    const { header, className } = this.props
    return (
      <Jumbotron className={className} style={style}>
        <Image src={header.img.src} {...header.img.props} />
        <h1>{header.title}</h1>
        <h2>{header.subTitle}</h2>
        <p />
        <p />
      </Jumbotron>
    )
  }
}

export default Jumbo
