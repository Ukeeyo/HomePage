import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import BottomGraph from "./BottomGraph"

const pageRowStyle = {
  // overflow: 'hidden'
}
const pageColStyle = {
  // border: '1px solid black',
}

class ViewGridRow extends React.Component {
  render() {
    const { rowModel } = this.props
    const cols = rowModel.map((tileModel, i) => {
      switch (tileModel.custComp) {
        // Leaving this switch in case I want to make custom tiles
        default:
          return (
            <Col
              style={{ ...pageColStyle, ...tileModel.style }}
              key={`tile-${i}`}
              {...tileModel.props}
            >
              {tileModel.topText ? (
                <Row {...tileModel.topText.props} style={tileModel.topText.style}>
                  {tileModel.topText.content}
                </Row>
              ) : null}
              {tileModel.img ? (
                <Row className="justify-content-center">
                  <Image src={tileModel.img.src} {...tileModel.img.props} />
                </Row>
              ) : null}
              {tileModel.paragraph ? (
                <Row {...tileModel.paragraph.props}>
                  <p style={tileModel.paragraph.style}>{tileModel.paragraph.content}</p>
                </Row>
              ) : null}
              {tileModel.list ? (
                <Row {...tileModel.list.props}>
                  <p style={tileModel.list.style}>{parseList(tileModel.list.content)}</p>
                </Row>
              ) : null}
              {tileModel.bottomText ? (
                <Row {...tileModel.bottomText.props} style={tileModel.bottomText.style}>
                  
                  {tileModel.bottomText.content}
                </Row>
              ) : null}
              {tileModel.bottomGraph ? (
                <BottomGraph {...tileModel.bottomGraph.props} />
              ) : null}
            </Col>
          )
      }
    })

    return <Row style={pageRowStyle}>{cols}</Row>
  }
}

const parseList = (p) => {
  return p.map((line) => {
    return (<ul><li>{line}</li></ul>);
  })
} 

export default ViewGridRow
