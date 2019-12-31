import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Context from './Content.json';
import JeopardyModal from './JeopardyModal.js';
import CSS from "./App.css"
import './App.css';

const ERAS = ['seventies', 'eighties', 'nineties', 'two-thousands', 'twenty-tens'];

class Board extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      adventure: null,
      color: null
    };
  }
  getTime(timePeriod) {
    switch (timePeriod) {
      case 'seventies':
        return '1970s';
      case 'eighties':
        return '1980s';
      case 'nineties':
        return '1990s';
      case 'two-thousands':
        return '2000s';
      case 'twenty-tens':
        return '2010s';
      default:
        return 'Wildcard';
    }
  }

  getType(content, type, header = false) {
    const cards = ERAS.map((timePeriod) => {
      const formattedTime = this.getTime(timePeriod);
      const { color } = this.state;
      return (
      <Col key={`${timePeriod}-${type}`}>
        {header ? <h2 className="mb-3">{formattedTime}</h2> : ''}
        <JeopardyModal
          color={color}
          level={type}
          timePeriod={formattedTime}
          question={content[timePeriod][type]}
        />
      </Col>
    )});
    return cards;
  }

  changeAdventure(adventure, color) {
    this.setState({ adventure, color });
  }
  selectAdventure() {
    return (
      <div>
      <Button color="danger" onClick={() => this.changeAdventure('songs', 'danger')}>Songs</Button>
      <Button color="info" onClick={() => this.changeAdventure('dialogues', 'info')}>Dialogues</Button>
      <Button color="warning" onClick={() => this.changeAdventure('pictures', 'warning')}>Pictures</Button>
      </div>
    );
  }

  getBoard(content) {
    const hundreds = this.getType(content, '100', true);
    const twoHundreds = this.getType(content, '200');
    const threeHundreds = this.getType(content, '300');
    const fourHundreds = this.getType(content, '400');
    const fiveHundreds = this.getType(content, '500');

    return(
      <div>
      <Row className="mb-3">
        {hundreds}
      </Row>
      <Row className="mb-3">
        {twoHundreds}
      </Row>
      <Row className="mb-3">
        {threeHundreds}
      </Row>
      <Row className="mb-3">
        {fourHundreds}
      </Row>
      <Row className="mb-3">
        {fiveHundreds}
      </Row>
      </div>
    );
  }

  getAdventureBoard() {
    const { adventure } = this.state;

    switch(adventure) {
      case 'songs':
        return this.getBoard(Context);
      case 'dialogues':
        return this.getBoard(Context);
      case 'pictures':
        return this.getBoard(Context);
    }
  }

  render() {
    const { adventure } = this.state;
    return (
      <Container className="App">
        <h1 className="mt-4">
          Welcome to Jeopardy!
        </h1>
        {this.selectAdventure()}
        {adventure ? this.getAdventureBoard() : ''}
      </Container>
    );
  }
}

export default Board;