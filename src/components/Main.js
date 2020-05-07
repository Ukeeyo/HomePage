import React from 'react';
import Grid from './Grid';
import TextBubble from './TextBubble';
import SignBoard from './SignBoard';
import Resume from './Resume'

const backgroundStyle = {
  minHeight: '100vh',
  background: `url('${process.env.PUBLIC_URL}/blue_ocean.jpeg') no-repeat center center fixed`
};

class Main extends React.Component {
  render() {
    return (
    <div style={backgroundStyle}>
        <SignBoard style={{marginBottom: 25}} title={'Yukio Rattai'} subTitle={'Software Engineer'} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Hello there, my name is Yukio. I'm a software engineer with 5 years of hands on experience"} />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Hi Yukio, would you be able to elaborate more about what you have worked with?"} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"I'm glad you asked! I have listed a few of the technologies that I am familiar with below"} />
        <SignBoard style={{marginTop: 25, marginBottom: 25}} title={'Tech'} subTitle={'A few things I have been known to use'} />
        <Grid />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Thanks for sharing that, do you also have a recent copy of your resume?"} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Of course, you can see my experience below."} />
        <SignBoard style={{marginTop: 25}} title={'Resume'} subTitle={'recent work experience + education'} />
        <Resume />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Thanks for sharing, we will be in touch soon."} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Great! You can reach out at any time to my email at YukioR@gmail.com, excited to hear from you."} />
        <SignBoard style={{marginTop: 25}} title={'Thanks!'} subTitle={'talk to you soon'} />
    </div>
    )
  }
}

export default Main;