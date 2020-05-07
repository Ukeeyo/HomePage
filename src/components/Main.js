import React from 'react';
import Grid from './Grid';
import TextBubble from './TextBubble';
import SignBoard from './SignBoard';
import Resume from './Resume'

const backgroundStyle = {
  minHeight: '100vh',
  background: `url('${process.env.PUBLIC_URL}/blue_ocean.jpeg') no-repeat center center fixed`,
  // paddingTop: 10
};

class Main extends React.Component {
  state = {
    woodLoaded: false,
    beachLoaded: false
  }

  componentDidMount() {
    const preload = [{name: 'beachLoaded', src: `${process.env.PUBLIC_URL}/blue_ocean.jpeg`}, {name: 'woodLoaded', src: `${process.env.PUBLIC_URL}/wood.jpg'`}]
    preload.forEach((preloadImg) => {
      const img = new Image();
      img.src = preloadImg.src;
      const newState = {};
      newState[preloadImg.name] = true
      img.onerror = (x) => {this.setState(newState)}
      img.onload = (x) => {this.setState(newState)}
    })
  }

  render() {
    if (!this.state.beachLoaded && !this.state.woodLoaded) {
      // TODO Put a spinner here.
      return null; 
    }
    return (
    <div style={backgroundStyle}>
        <SignBoard title={'Yukio Rattai'} subTitle={'Software Engineer'} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Hello there, my name is Yukio. I'm a software engineer with 5 years of hands on experience"} />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Hi Yukio, would you be able to elaborate more about what you have worked with?"} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"I'm glad you asked! I have listed a few of the technologies that I am familiar with below"} />
        <SignBoard title={'Tech'} subTitle={'A few things I have been known to use'} />
        <Grid />
        <SignBoard style={{height: 75}} title={''} subTitle={''} />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Thanks for sharing that, do you also have a recent copy of your resume?"} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Of course, you can see my experience below."} />
        <SignBoard title={'Resume'} subTitle={'recent work experience + education'} />
        <Resume />
        <SignBoard style={{ height: 75 }} title={''} subTitle={''} />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Thanks again! we will be in touch soon."} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Great! You can reach out at any time to my email at YukioR@gmail.com, excited to hear from you."} />
        <SignBoard title={'Thanks!'} subTitle={'talk to you soon'} />
    </div>
    )
  }
}

export default Main;