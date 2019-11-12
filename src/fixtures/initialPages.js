const max = 1
const min = 0.3

const getInitialPages = () => {
  const params = getParameters()
  const { type } = params

  switch (type) {
    case "ds":
      return generateDSPages(params)
    default:
      return generateSEPages(params)
  }
}

const generateDSPages = params => {
  return {
    header: {
      img: {
        src:
          "https://s.gravatar.com/avatar/39bef740aee5dd77906f2689d0c17304?s=100",
        props: {
          roundedCircle: true
        }
      },
      title: ``,
      subTitle: "Data Scientist"
    },
    pages: [
      {
        pageTitle: "Data Science",
        custComp: "DataSciencePage"
      }
    ]
  }
}

const generateSEPages = params => {
  return {
    header: {
      img: {
        src:
          "https://s.gravatar.com/avatar/39bef740aee5dd77906f2689d0c17304?s=100",
        props: {
          roundedCircle: true
        }
      },
      title: ``,
      subTitle: "Software Engineer",
      audience: params.audience
    },
    pages: [
      {
        pageTitle: "Skills",
        rows: generateSkillsRows()
      }
    ]
  }
}

const generateSkillsRows = () => {
  const skills = [
    {
      title: "JavaScript",
      image: "/JavaScript.png",
      graph: {
        scale: 10,
        value: 9
      }
    },
    {
      title: "React",
      image: "/React.png",
      graph: {
        scale: 10,
        value: 8
      }
    },
    {
      title: "Ember",
      image: "/Ember.png",
      graph: {
        scale: 10,
        value: 8
      }
    },
    {
      title: "Node",
      image: "/Node.png",
      graph: {
        scale: 10,
        value: 7
      }
    },
    {
      title: "Python",
      image: "/Python.png",
      graph: {
        scale: 10,
        value: 7
      }
    },
    {
      title: "Ruby",
      image: "/Ruby.png",
      graph: {
        scale: 10,
        value: 7
      }
    },
    {
      title: "WebPack",
      image: "/WebPack.png",
      graph: {
        scale: 10,
        value: 6
      }
    },
    {
      title: "C++",
      image: "/CPP.png",
      graph: {
        scale: 10,
        value: 5
      }
    },
    {
      title: "R",
      image: "/R.png",
      graph: {
        scale: 10,
        value: 6
      }
    }
  ]

  const headerRow = [
    {
      topText: "Skills",
      style: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        fontSize: 35,
        padding: 15,
        marginBottom: 10
      }
    }
  ]

  const rows = [headerRow, []]
  let numRowSkills = 0
  let rowIndex = 1
  skills.forEach(skill => {
    const graphValue = 100 * (skill.graph.value / skill.graph.scale)
    const newTile = {
      topText: skill.title,
      style: {
        backgroundColor: `rgba(0, 0, 0, ${Math.random() * (max - min) + min})`,
        color: "white",
        fontSize: "25px",
        padding: 15
      },
      img: {
        src: skill.image,
        props: {
          fluid: true,
          roundedCircle: true,
          style: {
            height: 100,
            width: 100
          }
        }
      },
      bottomText: {
        style: { paddingLeft: `${graphValue - 10}%` },
        content: `${graphValue}%`
      },
      bottomGraph: {
        props: {
          id: `bottom-graph-${rowIndex}-${numRowSkills}`,
          scale: skill.graph.scale,
          value: skill.graph.value
        }
      }
    }
    if (numRowSkills < 3) {
      rows[rowIndex].push(newTile)
      numRowSkills += 1
    } else {
      rows.push([newTile])
      numRowSkills = 1
      rowIndex += 1
    }
  })

  return rows
}

function getParameters() {
  const pairs = window.location.search.slice(1).split("&")

  const result = {}
  pairs.forEach(function(pair) {
    pair = pair.split("=")
    result[pair[0]] = decodeURIComponent(pair[1] || "")
  })

  return JSON.parse(JSON.stringify(result))
}

export default getInitialPages()
