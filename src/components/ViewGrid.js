import React from "react"
import { Container } from "react-bootstrap"
import ViewGridRow from "./ViewGridRow"

class ViewGrid extends React.Component {
  render() {
    const pages = []

    this.props.contentPages.forEach((page, pageIndex) => {
      pages.push(
        generatePage(
          page,
          pageIndex,
       )
      );
    })

    return (
      <div>
        <Container fluid={true}>
          {pages}
        </Container>
      </div>
    )
  }
}

const generatePage = (pageModel, pageIndex, activeIndex) => {
  const rows = []

  pageModel.rows.forEach((row, i) => {
    rows.push(<ViewGridRow rowModel={row} key={`row-${i}`} />)
  })

  return (
    <Container
      id={`page-${pageIndex}`}
      key={`page-${pageIndex}`}
      style={{
        ...pageModel.style, 
      }}
      fluid={true}
    >
      {rows}
    </Container>
  )
}

export default ViewGrid
