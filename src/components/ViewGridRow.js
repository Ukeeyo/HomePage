import React from 'react';
import { Row, Col, Image} from 'react-bootstrap'
import BottomGraph from './BottomGraph';

const pageRowStyle = {
  // overflow: 'hidden'
};
const pageColStyle = {
  // border: '1px solid black',
};

class ViewGridRow extends React.Component {

  render() {
    const cols = this.props.rowModel.map((tileModel, i) => {
        switch (tileModel.custComp) {
          // Leaving this in case I want to make custom tiles
          default:
            return (
              <Col style={{ ...pageColStyle, ...tileModel.style }} key={`tile-${i}`}>
                {tileModel.topText ? <Row className="justify-content-center"> {tileModel.topText} </Row> : null}
                {tileModel.img ? <Row className="justify-content-center"><Image src={tileModel.img.src} {...tileModel.img.props}/></Row> : null}
                {tileModel.bottomText ? <Row style={tileModel.bottomText.style}> {tileModel.bottomText.content} </Row> : null}
                {tileModel.bottomGraph ? <BottomGraph {...tileModel.bottomGraph.props} /> : null}
              </Col>
            );
        }
    });
  
    return (
      <Row style={pageRowStyle}>
        {cols}
      </Row>
    )
  }
};

export default ViewGridRow;