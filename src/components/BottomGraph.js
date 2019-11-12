import React from "react"
import { Container } from "react-bootstrap"

const style = {
  outerContainer: {
    padding: 0,
    height: 10,
    backgroundColor: "rgb(194, 178, 128)",
    marginTop: 5,
    marginBottom: 5
  },
  bar: {
    backgroundColor: "rgba(30, 239, 239, 0.8)",
    height: 10,
    float: "left"
  }
}

class BottomGraph extends React.Component {
  render() {
    const { value, scale } = this.props
    return (
      <Container style={style.outerContainer}>
        <Container
          style={{
            ...style.bar,
            width: `${100 * (value / scale)}%`
          }}
        />
      </Container>
    )
  }
}

export default BottomGraph
