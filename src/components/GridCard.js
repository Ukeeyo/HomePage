import React from "react"

const cardStyle = {
	padding: '1rem',
	display: 'flex',
	flexDirection: 'column'
}

const imgStyle = {
	height: 150,
	width: 150,
	borderRadius: 25
};

const nameStyle = {
	backgroundColor: 'rgba(0,0,0,0.7)',
	color: 'white',
	textAlign: 'center',
	marginTop: 5,
	borderRadius: 25
}

export default class Grid extends React.Component {
	render() {
		return (
			<div style={cardStyle}>
				<img style={imgStyle} src={this.props.img} alt="" />
				<div style={nameStyle}>
					{this.props.name}
				</div>
			</div>
			)
	}
}
