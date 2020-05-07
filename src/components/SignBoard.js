import React from 'react';
import './CSS/sign-board.css';

const container = {
	color: 'white',
	display: 'flex',
  	justifyContent: 'center',
  	backgroundColor: 'rgba(0,0,0,0.8)',
  	borderRadiusBottom: "30%",
  	padding: 25,
};

const titleContainer = {
	fontFamily: 'Pacifico, cursive',
 	display: 'flex',
};

const subTitleStyle = {
	paddingLeft: 5,
	marginTop: 'auto'
};

export default class TextBubble extends React.Component {
	render() {
		const containerStyle = this.props.style ? { ...container, ...this.props.style } : container;
		return (
	      <div style={containerStyle}>
	        <div style={titleContainer}>
	      	  <div className="sign-board-title" >{this.props.title}</div>
	      	  <div style={subTitleStyle} className="sign-board-sub-title">{this.props.subTitle}</div>
	        </div>
	      </div>
		)
	}
}