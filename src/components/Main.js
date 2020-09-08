import React from "react"
import Grid from "./Grid"
import TextBubble from "./TextBubble"
import SignBoard from "./SignBoard"
import Resume from "./Resume"
import Input from "./Input"
import Chat from "./Chat"
import ResponseParser from "../lib/ResponseParser"

const backgroundStyle = {
  minHeight: "100vh",
  background: `url('${process.env.PUBLIC_URL}/blue_ocean.jpeg') no-repeat center center fixed`,
  backgroundSize: "cover"
}

class Main extends React.Component {
  state = {
    beachLoaded: false,
    chat: [
      <TextBubble
        avatar={`${process.env.PUBLIC_URL}/profile.jpg`}
        content={
          "Hello there, my name is Marshall. I'm an experienced Full Stack Developer"
        }
        key={0}
      />
    ]
  }

  componentDidMount() {
    const preload = [
      { name: "beachLoaded", src: `${process.env.PUBLIC_URL}/blue_ocean.jpeg` }
    ]
    preload.forEach(preloadImg => {
      const img = new Image()
      img.src = preloadImg.src
      const newState = {}
      newState[preloadImg.name] = true
      img.onerror = x => {
        this.setState(newState)
      }
      img.onload = x => {
        this.setState(newState)
      }
      this.renderFollowUp(`Ask me about my "Skills", or "Resume"`, 1000)
    })
  }

  renderFollowUp(text, timeout, comp) {
    setTimeout(() => {
      this.updateChat(text, true)
    }, timeout)
    if (comp) {
      setTimeout(() => {
        this.addContent(comp);
      }, 3000)
    }
  }

  addContent(comp) {
    this.setState(state => {
      return {
        ...state,
        chat: [
          ...state.chat,
          comp
        ]
      }
    })
  }

  updateChat(newText, host = false) {
    const avatar = host
      ? `${process.env.PUBLIC_URL}/profile.jpg`
      : `${process.env.PUBLIC_URL}/avatar-ph.png`
    this.setState(state => {
      return {
        ...state,
        chat: [
          ...state.chat,
          <TextBubble
            reverse={!host}
            avatar={avatar}
            content={newText}
            key={state.chat.length}
          />
        ]
      }
    })
    if (!host) {
      const response = this.generateResponse(newText);
      this.renderFollowUp(response.text, 1000, response.comp);
    }
  }

  generateResponse(response) {
    const intent = ResponseParser.getIntent(response);
    if (intent === 'skills') {
      return {
        text: `Let me get a list of Marshall's skills for you`,
        comp: (<>
                <SignBoard title={'Tech'} subTitle={'A few things I have been known to use'} />
                <Grid />
              </>)
      }
    }
    if (intent === 'resume') {
      return {
        text: `I'll pull up that resume for you, one moment...`,
        comp: (<>
                <SignBoard title={'Resume'} subTitle={'recent work experience + education'} />
                <Resume />
              </>)
      }
    }
    if (intent === 'contact') {
      return {
        text: 'Great! You can reach out at any time via email at Marshall.Rattai@gmail.com, excited to hear from you."'
      }
    }
    return {
      text: `Appologies, My functionality is very limited at the moment, please enter one of the following key words: "Skills", "Resume", or "Contact"`
    }
  }

  render() {
    if (!this.state.beachLoaded) {
      // TODO Put a spinner here.
      return null
    }
    return (
      <div style={backgroundStyle}>
        <SignBoard title="Marshall Yukio Rattai" subTitle="Software Engineer" />
        <Chat chat={this.state.chat} />
        <Input
          onSubmit={newText => {
            this.updateChat(newText)
          }}
        />
      </div>
    )
  }
}

export default Main
