/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CSS from './App.css';

class JeopardyModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      solved: false,
      color: props.color,
      modal: false
    }
  }

  toggle() {
    this.setState({color: "secondary"});
    this.setState(prevState => ({modal: !prevState.modal}));
  }

  createMarkup(text) { return {__html: text}; };

  render() {
    const {
      level,
      timePeriod,
      question,
      className
    } = this.props;

    const header = `Question for ${timePeriod}, level: ${level}`
    const { color, modal } = this.state;
    return (
      <div>
        <Button className={CSS.card} color={color} onClick={this.toggle}>{level}</Button>
        <Modal isOpen={modal} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>
            {header}
          </ModalHeader>
          <ModalBody>
            <h2>
              <div dangerouslySetInnerHTML={this.createMarkup(question)} />
            </h2>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default JeopardyModal;