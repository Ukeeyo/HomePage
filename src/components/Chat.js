import React from "react"
import "./CSS/input.css"

export default class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight)
  }

  render() {
    const { chat } = this.props;
    return (
      <div ref={this.scrollRef} style={{ paddingBottom: 100 }}>
        {chat}
        {/* <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Hello there, my name is Marshall. I'm an experienced Software Engineer"} /> */}
        {/*        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Hi Marshall, would you be able to elaborate more about what you have worked with?"} />
        <TextBubble style={{paddingBottom: 100}} avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"I'm glad you asked! I have listed a few of the technologies that I am familiar with below"} />
        <SignBoard title={'Tech'} subTitle={'A few things I have been known to use'} />
        <Grid />
        <SignBoard style={{height: 75}} title={''} subTitle={''} />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Thanks for sharing that, do you also have a recent copy of your resume?"} />
        <TextBubble style={{paddingBottom: 100}} avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Of course, you can see my experience below."} />
        <SignBoard title={'Resume'} subTitle={'recent work experience + education'} />
        <Resume />
        <SignBoard style={{ height: 75 }} title={''} subTitle={''} />
        <TextBubble reverse={true} avatar={`${process.env.PUBLIC_URL}/avatar-ph.png`} content={"Thanks again! we will be in touch soon."} />
        <TextBubble avatar={`${process.env.PUBLIC_URL}/profile.jpg`} content={"Great! You can reach out at any time to my email at Marshall.Rattai@gmail.com, excited to hear from you."} />
        <SignBoard title={'Thanks!'} subTitle={'talk to you soon'} /> */}
      </div>
    )
  }
}
