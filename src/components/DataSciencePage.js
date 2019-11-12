import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import * as d3 from 'd3';
const style = {
  container: {
    backgroundColor: `rgba(0, 0, 0, 0.5`,
  }
}

class DataSciencePage extends React.Component {
    state = {activeContent: 'none'};
    componentDidMount() {
        const width = 400;
        const height = 400;
        const margin = 10;

        const radius = Math.min(width, height) / 2 - margin

        const svg = d3.select(`#${this.props.idName || 'data-science-page-d3'}`)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr("viewBox", `0 0 ${height} ${width}`)
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

        // Create dummy data
        const data = {
            'Business': 100/3,
            'Statistics': 100/3,
            'Programming': 100/3,
        }

        // set the color scale
        const color = d3.scaleOrdinal()
            .domain(data)
            .range(d3.schemeSet2);

        // Compute the position of each group on the pie:
        const pie = d3.pie()
            .value(function(d) {
                return d.value;
            })
        const data_ready = pie(d3.entries(data))
            // Now I know that group A goes from 0 degrees to x degrees and so on.

        // shape helper to build arcs:
        const arcGenerator = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        // This is gross, but I couldn't figure out a better solution with D3s interface.
        const reactComp = this;
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', arcGenerator)
            .attr('fill', (d) => {
                return (color(d.data.key))
            })
            .attr('stroke', 'black')
            .style('stroke-width', '2px')
            .style('opacity', 0.7)
            .on('mouseover', function(evt) {
              reactComp.setState({activeContent: evt.data.key});
              d3.select(this).style("fill", "blue");
            })
            .on('mouseout', function(evt) {
              d3.select(this).style("fill", color(evt.data.key));
              // d3.select(this).attr('fill', (d) => {
              //   console.log('????', color(d.data.key));
              //   return (color(d.data.key))
              // });
            });

        // Now add the annotation. Use the centroid method to get the best coordinates
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function(d) {
                return d.data.key
            })
            .attr('transform', function(d) {
                const centroid = arcGenerator.centroid(d)
                if (d.index === 0) {
                  centroid[0] += 40
                }
                if (d.index === 1) {
                  centroid[1] += 40
                }
                if (d.index === 2) {
                  centroid[0] -= 40
                }
                return 'translate(' + centroid + ')';
            })
            .style('text-anchor', 'middle')
            .style('font-size', 17)
            .attr("pointer-events", "none");

        svg
        .append("circle")
        .attr("r", 60)
        // .style("fill", "blue")
        .style('opacity', 0.9);
    }

  render() {
      return (
        <Container style={{...this.props.style, ...style.container}} className={this.props.className} id={this.props.id}>
          <Row>
            <Col 
              id={this.props.idName || 'data-science-page-d3'}
              xs={8}
            ></Col>
            <Col>{this.state.activeContent}</Col>
          </Row>
        </Container>);
  }
};

export default DataSciencePage;