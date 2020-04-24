import React from "react"
import { connect } from "react-redux";
import ViewGrid from "./ViewGrid"

class Main extends React.Component {
  render() {
    return (
      <ViewGrid contentPages={this.props.contentPages}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    contentPages: state.contentPages,
  }
}

Main = connect(mapStateToProps)(ViewGrid)
export default Main;