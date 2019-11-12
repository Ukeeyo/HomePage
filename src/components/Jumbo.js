import React from 'react';
import { Jumbotron, Image} from 'react-bootstrap';
const style = {
	backgroundColor: `rgba(0, 0, 0, 0.7`,
	color: 'white',
	textAlign: 'center'
}

class Jumbo extends React.Component {
	render() {
		console.log(this.props);
		return (<Jumbotron className={this.props.className} style={style}>
		  <Image src={this.props.header.img.src} {...this.props.header.img.props}/>
		  <h1>{this.props.header.title}</h1>
		  <h2>{this.props.header.subTitle}</h2>
		  <p>
		    
		  </p>
		  <p>
		  </p>
		</Jumbotron>);
	}
}

export default Jumbo;