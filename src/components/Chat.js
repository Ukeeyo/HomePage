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
    const { chat } = this.props
    return (
      <div ref={this.scrollRef} style={{ backgroundColor: "rgba(255,255,255,0.2)", flexGrow: 10 }}>
        {chat}
      </div>
    )
  }
}
