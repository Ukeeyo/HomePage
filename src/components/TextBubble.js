import React from 'react';

const profileImageStyle = {
	borderRadius: '50%',
	width: 150,
};

const ContainerStyle = {
	display: 'flex',
	padding: 10
}
const textBubble = {
	fontFamily: `'Montserrat', sans-serif`,
	color: 'white',
	padding: '1rem',
	backgroundColor: 'rgba(0,0,0,0.7)',
	marginTop: 'auto',
	borderRadius: 10,
	marginLeft: 5
};


export default class TextBubble extends React.Component {
	render() {
		if (this.props.reverse) {
			return(
				<div style={{ ...ContainerStyle, justifyContent: 'flex-end', marginRight: '3rem' }}>
					<div style={textBubble}>
						{this.props.content}
					</div>
					<img 
						src={this.props.avatar} 
						style={profileImageStyle}
						alt=""
					/>
				</div>
				)
		}
		return(
			<div style={{ ...ContainerStyle, marginLeft: '3rem' }}>
				<img 
					src={this.props.avatar} 
					style={profileImageStyle}
					alt=""
				/>
				<div style={textBubble}>
					{this.props.content}
				</div>
			</div>
			)
	}
}