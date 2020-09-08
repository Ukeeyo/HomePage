import React from "react"
import GridCard from "./GridCard"

const style = {
  display: "grid",
  gridGap: "1rem",
  justifyItems: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  paddingTop: "1rem",
  backgroundColor: "rgba(0,0,0,0.7)",
  paddingBottom: 20
}

const techList = [
  {
    name: "JavaScript",
    img: "JavaScript.png"
  },
  {
    name: "React",
    img: "React.png"
  },
  {
    name: "Ember",
    img: "Ember.png"
  },
  {
    name: "Node",
    img: "Node.png"
  },
  {
    name: "Python",
    img: "Python.png"
  },
  {
    name: "Ruby",
    img: "Ruby.png"
  },
  {
    name: "C++",
    img: "CPP.png"
  }
]

export default class Grid extends React.Component {
  render() {
    const cards = techList.map(tech => {
      return (
        <GridCard
          key={`${tech.name}-i`}
          img={`${process.env.PUBLIC_URL}/${tech.img}`}
          name={tech.name}
        />
      )
    })

    return (
      <>
        <div style={style}>{cards}</div>
      </>
    )
  }
}
