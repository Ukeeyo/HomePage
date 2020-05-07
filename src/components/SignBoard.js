import React from 'react';

const container = {
	color: 'white',
	display: 'flex',
  	justifyContent: 'center',
  	background: `url('${process.env.PUBLIC_URL}/wood.jpg')`,
  	backgroundSize: 'cover',
  	borderRadiusBottom: "30%",
  	padding: 25,
};

const titleContainer = {
	fontFamily: 'Pacifico, cursive',
 	display: 'flex',
};

const titleStyle = {
	fontSize: 50,
};

const subTitleStyle = {
	paddingLeft: 5,
	fontSize: 20,
	marginTop: 'auto'
};

export default class TextBubble extends React.Component {
	render() {
		const containerStyle = this.props.style ? { ...container, ...this.props.style } : container;
		return (
	      <div style={containerStyle}>
	        <div style={titleContainer}>
	      	  <div style={titleStyle}>{this.props.title}</div>
	      	  <div style={subTitleStyle}>{this.props.subTitle}</div>
	        </div>
	      </div>
		)
	}
}