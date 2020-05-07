import React from 'react';
import './CSS/text-bubble.css';

const profileImageStyle = {
	borderRadius: '50%',
	width: 150,
};

const ContainerStyle = {
	display: 'flex',
	padding: 10,
	backgroundColor: 'rgba(255,255,255,0.5)',
	paddingTop: 25,
	paddingBottom: 40
}
const textBubble = {
	fontFamily: `'Montserrat', sans-serif`,
	color: 'white',
	padding: '1rem',
	backgroundColor: 'rgba(0,0,0,0.7)',
	marginTop: 'auto',
	borderRadius: 10,
	paddingLeft: 5,
	marginLeft: 10,
	marginRight: '0.5vw'
};


export default class TextBubble extends React.Component {
	render() {
		return(
			<div style={{ ...ContainerStyle, ...this.props.style ,flexDirection: this.props.reverse ? 'row-reverse' : 'row' }}>
				<img 
					src={this.props.avatar} 
					style={profileImageStyle}
					alt=""
				/>
				<div style={textBubble} className="text-bubble" >
					{this.props.content}
				</div>
			</div>
			)
	}
}