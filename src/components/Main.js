import React from "react"
import Grid from "./Grid"
import TextBubble from "./TextBubble"
import SignBoard from "./SignBoard"
import Input from "./Input"
import Chat from "./Chat"
import ResponseParser from "../lib/ResponseParser"

const backgroundStyle = {
  minHeight: "100vh",
  background: `url('${process.env.PUBLIC_URL}/blue_ocean.jpeg') no-repeat center center fixed`,
  backgroundSize: "cover",
  display: 'flex',
  flexDirection: 'column'
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  componentDidMount() {
    const preload = [
      { name: "beachLoaded", src: `${process.env.PUBLIC_URL}/blue_ocean.jpeg` },
      { name: "avatar1", src: `${process.env.PUBLIC_URL}/avatar-ph.png` },
      { name: "avatar2", src: `${process.env.PUBLIC_URL}/profile.jpg` }
    ]
    preload.forEach(preloadImg => {
      const img = new Image()
      img.src = preloadImg.src
      const newState = {}
      newState[preloadImg.name] = true
      img.onerror = err => {
        console.error(err)
        this.setState(newState)
      }
      img.onload = () => {
        this.setState(newState)
      }
    })
  }

  addContent(comp) {
    this.setState(state => {
      return {
        ...state,
        chat: [...state.chat, comp]
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
      const response = this.generateResponse(newText)
      this.renderFollowUp(response.text, 1000, response.comp)
    }
  }

  generateResponse(response) {
    const intent = ResponseParser.getIntent(response)
    if (intent === "skills") {
      return {
        text: `Let me get a list of Marshall's skills for you`,
        comp: (
          <>
            <SignBoard
              title="Tech"
              subTitle="A few things I have been known to use"
            />
            <Grid />
          </>
        )
      }
    }
    if (intent === "contact") {
      return {
        text:
          'Great! You can reach out at any time via email at Marshall.Rattai@gmail.com, excited to hear from you.'
      }
    }
    return {
      text: `Appologies, My functionality is very limited at the moment, please enter one of the following key words: "Skills", or "Contact"`
    }
  }

  renderFollowUp(text, timeout, comp) {
    setTimeout(() => {
      this.updateChat(text, true)
    }, timeout)
    if (comp) {
      setTimeout(() => {
        this.addContent(comp)
      }, 3000)
    }
  }

  render() {
    const { beachLoaded, chat } = this.state
    if (!beachLoaded) {
      // TODO Put a spinner here.
      return null
    }
    return (
      <div style={backgroundStyle}>
        <SignBoard title="Marshall Yukio Rattai" subTitle="Software Engineer" />
        <Chat chat={chat} />
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
