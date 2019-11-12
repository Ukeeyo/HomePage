import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ViewGrid from './components/ViewGrid'

class App extends Component {
  render() {
    return (
      <Container>
        <ViewGrid/>
      </Container>
    );
  }
}

export default App;