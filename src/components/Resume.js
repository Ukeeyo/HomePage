import React from "react";

const container = {
	display: 'flex',
	flexDirection: 'column',
	fontFamily: `'Montserrat', sans-serif`,
	backgroundColor: 'rgba(0,0,0,0.7)',
	color: 'white',
	padding: 10
}
const resumeItem = {
	display: 'flex',
	justifyContent: 'space-between'
}
const imgStyle = {
	width: 150,
	height: 150,
	margin: 'auto',
	alignSelf: 'center'
}


export default class Resume extends React.Component {
	render() {
		return (
				<div style={container}>

<div style={{fontSize: 25}}>Work Experience</div>

					<div style={resumeItem}>
						<div style={{
							paddingLeft: 10,
							display: 'flex',
							flexDirection: 'column',
							paddingBottom: 20,
							width: 200
						}}>
							<img style={imgStyle} src={`${process.env.PUBLIC_URL}/PlayStation.png`} alt="" />
							<div style={{textAlign: 'center'}}>Playstation</div>
							<div style={{textAlign: 'center'}}>2015 - Present</div>
						</div>
						<div style={{
							margin: 'auto'
						}}>
							<ul>
								<li>Developed web applications for the PS4 platform</li>
								<li>Created and maintained JS libraries</li>
								<li>Managed the release process of applications that ship to millions of PlayStation network users</li>
								<li>Analyzed data to ensure application performance</li>
								<li>Iterated and A/B tested improvements</li>
								<li>Shipped SDK libraries for PlayStation consoles</li>
							</ul>
						</div>
					</div>

<div style={{marginTop: 25, fontSize: 25}}>Education</div>

					<div style={resumeItem}>
						<div style={{
							paddingLeft: 10,
							display: 'flex',
							flexDirection: 'column',
							paddingBottom: 20,
							width: 200
						}}>
							<img style={imgStyle} src={`${process.env.PUBLIC_URL}/SFSU.png`} alt="" />
							<div style={{textAlign: 'center'}}>SFSU</div>
						</div>
						<div style={{
							margin: 'auto'
						}}>
							Business Administration (B.S.)
						</div>
					</div>

				</div>)
	}
}