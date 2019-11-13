import React from "react"
import { connect } from "react-redux"
import { Container, Button } from "react-bootstrap"
import {
  changeContentIndex,
  addContentPage,
  changeVisiblePages
} from "../actions"
import DataSciencePage from "./DataSciencePage"
import ViewGridRow from "./ViewGridRow"
import Header from "./Header"
import Jumbo from "./Jumbo"

const PAGE_CLASS_NAME = "Jumbo"

const containerStyle = {
  marginTop: 100
}
const pageStyle = {
  transition: "opacity .8s ease-in-out",
  marginBottom: 32
}
const buttonStyle = {
  backgroundColor: `rgba(0, 0, 0, 0`,
  borderColor: `rgba(0, 0, 0, 0)`
}
let timeout

class ViewGridComp extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      onScroll(this.props.dispatch)
    })
    window.addEventListener("resize", () => {
      onScroll(this.props.dispatch)
    })
    onScroll(this.props.dispatch)
  }

  render() {
    const pages = []
    const buttons = [
      <Button
        style={buttonStyle}
        onClick={() => {
          window.scrollTo(0, 0)
        }}
        key="top-button"
      >
        Top
      </Button>
    ]

    this.props.contentPages.forEach((page, pageIndex) => {
      const active = pageIndex === this.props.contentIndex
      switch (page.custComp) {
        case "DataSciencePage":
          pages.push(
            <DataSciencePage
              className={PAGE_CLASS_NAME}
              id={`page-${pageIndex}`}
              idName={`svg-${pageIndex}`}
              ref={this.myRef}
              active={active}
              key={`page-${pageIndex}`}
              style={{
                ...pageStyle,
                ...{ opacity: this.props.visiblePages[pageIndex] ? 1 : 0 }
              }}
            />
          )
          break
        default:
          pages.push(
            generatePage(
              page,
              pageIndex,
              this.props.contentIndex,
              this.props.visiblePages[pageIndex]
            )
          )
      }
      buttons.push(
        <Button
          style={buttonStyle}
          onClick={() => {
            onButtonClick(this.props.dispatch, pageIndex)
          }}
          key={`button-${pageIndex}`}
        >
          {page.pageTitle || pageIndex + 1}
        </Button>
      )
    })

    return (
      <Container style={containerStyle}>
        <Header buttons={buttons} audience={this.props.header.audience} />
        <Jumbo header={this.props.header} />
        {pages}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    contentIndex: state.contentIndex,
    contentPages: state.contentPages,
    visiblePages: state.visiblePages,
    header: state.header
  }
}

const generatePage = (pageModel, pageIndex, activeIndex, visible) => {
  const rows = []

  pageModel.rows.forEach((row, i) => {
    rows.push(<ViewGridRow rowModel={row} key={`row-${i}`} />)
  })

  return (
    <Container
      className={PAGE_CLASS_NAME}
      id={`page-${pageIndex}`}
      key={`page-${pageIndex}`}
      style={{
        ...pageModel.style,
        ...pageStyle,
        ...{ opacity: visible ? 1 : 0 }
      }}
    >
      {rows}
    </Container>
  )
}

let ViewGrid = ({
  dispatch,
  contentIndex,
  contentPages,
  visiblePages,
  header
}) => {
  return (
    <ViewGridComp
      dispatch={dispatch}
      contentIndex={contentIndex}
      contentPages={contentPages}
      visiblePages={visiblePages}
      header={header}
    />
  )
}

const onButtonClick = (dispatch, newIndex) => {
  dispatch(changeContentIndex(newIndex))
  document.getElementById(`page-${newIndex}`) &&
    document.getElementById(`page-${newIndex}`).scrollIntoView()
  window.scrollBy(0, -50)
}

const onScroll = dispatch => {
  if (timeout) {
    window.cancelAnimationFrame(timeout)
  }
  timeout = window.requestAnimationFrame(() => {
    const pages = document.getElementsByClassName(PAGE_CLASS_NAME)
    const visiblePages = []
    for (let i = 0; i < pages.length; i++) {
      // dispatch(changeContentIndex(i));
      visiblePages.push(!!isElementInViewport(pages[i]))
    }
    dispatch(changeVisiblePages(visiblePages))
  })
}

const isElementInViewport = el => {
  const rect = el.getBoundingClientRect()
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  )
}

ViewGrid = connect(mapStateToProps)(ViewGrid)
export default ViewGrid
