import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Modal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

  }

  closeModal() {
    this.setState({ visible: false })
  }

  onSubmit(event) {
    event.preventDefault()

    return this.closeModal();
  }

  render() {
    return(
      <div id="modal" className={this.state.visible ? `modal_${this.props.id} activated` : `modal_${this.props.id}`}>
        {this.props.children}
      </div>
    )
  }
}

export default connect(null, actions)(Modal);
