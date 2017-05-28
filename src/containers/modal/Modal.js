import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Modal extends Component {
  componentWillMount() {
    let arr = []
    let first = true

    this.props.line.line.map(function(item) {
      if(first){
        arr.push(item)
        return first = false
      }
      return arr.push(parseFloat(item.replace(",", ".")).toFixed(2))
    })

    this.setState({
      value1: arr[0],
      value2: arr[1],
      value3: arr[2],
      value4: (arr[1] * arr[2]).toFixed(2),
      id: this.props.id
    })
    // this.setState({
    //   value1: arr[0],
    //   value2: parseFloat(arr[1]).toFixed(2),
    //   value3: parseFloat(arr[2]).toFixed(2),
    //   value4: parseFloat(arr[1]) * parseFloat(arr[2]),
    //   id: this.props.id
    // })
  }

  componentWillReceiveProps(nextProps) {
    let arr = []
    let first = true

    nextProps.line.line.map(function(item) {
      if(first){
        arr.push(item)
        return first = false
      }
      return arr.push(parseFloat(item.replace(",", ".")).toFixed(2))
    })

    this.setState({
      value1: arr[0],
      value2: arr[1],
      value3: arr[2],
      value4: (arr[1] * arr[2]).toFixed(2),
      id: nextProps.id
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      id: ''
      // visible: false
    }

    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onChange3 = this.onChange3.bind(this);
    // this.onChange4 = this.onChange4.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange1(event) {
    this.setState({ value1: event.target.value })
  }

  onChange2(event) {
    this.setState({
      value2: event.target.value,
      value4: (event.target.value * this.state.value3).toFixed(2)
    })
  }

  onChange3(event) {
    this.setState({
      value3: event.target.value,
      value4: (event.target.value * this.state.value2).toFixed(2)
    })
  }

  // onChange4(event) {
  //   this.setState({ value4: event.target.value })
  // }

  closeModal() {
    var modal = document.querySelector(`.modal_${this.props.id}`);
    // console.log(modal);
    modal.classList.remove('activated');
    // this.setState({ visible: false })
  }

  onSubmit(event) {
    event.preventDefault()

    let id = this.state.id;
    let value1 = this.state.value1;
    let value2 = this.state.value2;
    let value3 = this.state.value3;
    let value4 = this.state.value4;

    console.log('on Submit of modal OK', id, value1, value2, value3, value4);

    this.props.edit_item(id, value1, value2, value3, value4)

    return this.closeModal();
  }

  render() {
    // console.log('modal window', this.state.value4);

    return(
      <div id="modal" className={this.state.visible ? `modal_${this.props.id} activated` : `modal_${this.props.id}`}>
        <div className={"modalContent"}>
          <a className="closeModal" onClick={this.closeModal}>X</a>
          <h2>Nové hodnoty :</h2>
          <form onSubmit={this.onSubmit}>
            <input type="tel" value={this.state.value1} onChange={this.onChange1} />
            <input type="tel" value={this.state.value2} onChange={this.onChange2} />
            <input type="tel" value={this.state.value3} onChange={this.onChange3} />
            <input type="tel" value={this.state.value4} />
            <button className="modal-submit" onClick={this.onSubmit}>OK</button>
            <button className="modal-cancel" onClick={this.closeModal}>ZRUŠIT</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Modal);
