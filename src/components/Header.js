import React from "react"
import { Container, ButtonGroup, Accordion, Card, Image } from "react-bootstrap"

const containerStyle = {
	position: 'fixed',
	height: 50,
  margin: 0,
  zIndex: 9001,
	backgroundColor: `rgba(0, 0, 0, 0.9)`,
	display: 'table',
  width: '100%',
  paddingLeft: 25
};
const accordionStyle = {
	textAlign: 'right',
  	right: 30
};
const cardStyle = {
	backgroundColor: `rgba(0, 0, 0, 0.8)`,
  	color: 'white'
};
const cardBodyStyle = {
	padding: 0
};
const burgerStyle = {
	height: 30,
	width: 30,
	marginTop: 10
};
const titleStyle = {
	color: 'white',
	display: 'table-cell',
	verticalAlign: 'middle'
};

class Header extends React.Component {
  render() {
    const { audience, buttons } = this.props

    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          Yukio Marshal Rattai{audience ? ` + ${audience}` : ""}
        </h2>
        <Accordion style={accordionStyle}>
          <Card style={cardStyle}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Image
                style={burgerStyle}
                src="https://icon-library.net/images/white-menu-icon-png/white-menu-icon-png-6.jpg"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={cardBodyStyle}>
                <ButtonGroup vertical type="checkbox">
                  {buttons}
                </ButtonGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default Header
