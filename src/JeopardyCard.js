import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'reactstrap';
import './App.css'
import CSS from './index.css'

class JeopardyCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { frontContent, backContent } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" className={CSS.card}>
        <Card onClick={this.handleClick}>
          {frontContent}
        </Card>

        <Card onClick={this.handleClick}>
          {backContent}
        </Card>
      </ReactCardFlip>
    )
  }
}

export default JeopardyCard;
