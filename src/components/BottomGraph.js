import React from 'react';
import { Row, Container } from 'react-bootstrap';
import * as d3 from 'd3';
const style = {
	outerContainer: {
		padding: 0,
		height: 10,
		backgroundColor: 'rgb(194, 178, 128)',
		marginTop: 5,
		marginBottom: 5
	},
	bar: {
		backgroundColor: 'rgba(30, 239, 239, 0.8)',
		height: 10,
		float: 'left'
	}
}

class BottomGraph extends React.Component {
	render() {
		console.log(this.props.id)
		return (
			<Container style={style.outerContainer}>
				<Container style={{...style.bar, width: `${100*(this.props.value/this.props.scale)}%`}}></Container>
			</Container>);
	}
}

export default BottomGraph;