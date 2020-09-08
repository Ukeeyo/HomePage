import React from "react"
import "./CSS/input.css"

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  addTextToChat(text) {
    const { onSubmit } = this.props;
    onSubmit(text);
  }

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={e => {
            e.preventDefault()
            this.addTextToChat(this.inputRef.current.value)
            this.inputRef.current.value = ""
          }}
        >
          <div className="chat-input-container">
            <div className="button-container">
              <button
                onClick={() => {
                  this.addTextToChat(`Help!`)
                }}
                type="button"
                className="suggestions"
              >
                Help
              </button>
              <button
                onClick={() => {
                  this.addTextToChat(`I'd like to know more about your skills`)
                }}
                type="button"
                className="suggestions"
              >
                Skills
              </button>
              <button
                onClick={() => {
                  this.addTextToChat(`Do you have a resume I could look at?`)
                }}
                type="button"
                className="suggestions"
              >
                Resume
              </button>
              <button
                onClick={() => {
                  this.addTextToChat(
                    `I want to talk to the real Marshall, can I get his contact info?`
                  )
                }}
                type="button"
                className="suggestions"
              >
                Contact
              </button>
            </div>
            <input
              autoFocus
              ref={this.inputRef}
              className="input-style"
              type="text"
              placeholder="Chat"
            />
          </div>
        </form>
      </div>
    )
  }
}
