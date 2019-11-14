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
      title: "Yukio Rattai",
      subTitle: "Software Engineer",
      audience: params.audience
    },
    pages: [
      {
        pageTitle: "Skills",
        rows: generateSkillsRows()
      },
      {
        pageTitle: "Resume",
        rows: generateResumeRows(),
        style: {
          backgroundColor: `rgba(0, 0, 0, 0.6)`
        }
      }
    ]
  }
}

const generateResumeRows = () => {
  const headerRow = [
    {
      topText: {
        content: "Resume",
        props: {
          className: "justify-content-center"
        }
      },
      style: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        fontSize: 35,
        padding: 15,
        // marginBottom: 10
      }
    }
  ]
  return [
    headerRow,
    [
      {
        topText: {
          content: "Experience",
          style: {
            paddingLeft: 20
          }
        },
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          fontSize: 20,
          padding: 15,
          marginBottom: 10
        }
      }
    ],
    [
      {
        topText: {
          content: "PlayStation",
          props: {
            className: "justify-content-center"
          }
        },
        bottomText: {
          content: "2015 - present",
          props: {
            className: "justify-content-center"
          }
        },
        style: {
          color: "white",
          fontSize: "25px",
          marginTop: "auto",
          marginBottom: "auto"
        },
        img: {
          src: "/PlayStation.png",
          props: {
            fluid: true,
            style: {
              height: 100,
              width: 100
            }
          }
        }
      },
      {
        list: {
          content:
            [
              "Lead the development and maintenance of applications that shipped to 80 million users",
              "Continuously analyzed data to ensure the performance and quality of the software that was shipped",
              "Organized a program that sought to teach employees best practices when working with large datasets",
              "Performed and monitored A/B testing on new releases"
            ]
        },
        props: {
          xs: 8
        },
        style: {
          color: "white"
        }
      }
    ],
    [
      {
        topText: {
          content: "Education",
          style: {
            marginLeft: 20
          }
        },
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          fontSize: 20,
          padding: 15,
          marginBottom: 10
        }
      }
    ],
    [
      {
        topText: {
          content: "Udacity",
          props: {
            className: "justify-content-center"
          }
        },
        bottomText: {
          content: "Data Science",
          props: {
            className: "justify-content-center"
          }
        },
        style: {
          color: "white",
          fontSize: "25px",
          marginTop: "auto",
          marginBottom: "auto"
        },
        img: {
          src: "/Udacity.png",
          props: {
            fluid: true,
            style: {
              height: 100,
              width: 100
            }
          }
        }
      },
      {
        paragraph: {
          content: 'Subjects Studied',
          style: {
            fontSize: 20,
            marginLeft: 10,
            textDecoration: "underline"
          }
        },
        list: {
          content:
            [
              "Supervised and Unsupervised Learning",
              "Predictive Modeling",
              "Machine Learning",
              "Data Visualization"
            ],
            style: {
              fontSize: 20
            }
        },
        props: {
          // xs: 8
        },
        style: {
          color: "white"
        }
      }
    ],
    [
      {
        topText: {
          content: "San Francisco State University",
          props: {
            className: "justify-content-center"
          }
        },
        bottomText: {
          content: "Business Administration",
          props: {
            className: "justify-content-center"
          }
        },
        style: {
          color: "white",
          fontSize: "25px",
          marginTop: "auto",
          marginBottom: "auto"
        },
        img: {
          src: "/SFSU.png",
          props: {
            fluid: true,
            style: {
              height: 100,
              width: 100
            }
          }
        }
      },
      {
        paragraph: {
          content: 'Subjects Studied',
          style: {
            fontSize: 20,
            marginLeft: 10,
            textDecoration: "underline"
          }
        },
        list: {
          content:
            [
              "Advertising",
              "Marketing",
              "Finance",
              "Management",
              "Statistics",
              "Branding"
            ],
            style: {
              fontSize: 20
            }
        },
        props: {
          // xs: 8
        },
        style: {
          color: "white"
        }
      }
    ]
  ]
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
      topText: {
        content: "Skills",
        props: {
          className: "justify-content-center"
        }
      },
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
      topText: {
        content: skill.title,
        props: {
          className: "justify-content-center"
        }
      },
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
