import React, { Component } from 'react';
import Alert from '../../Alert';
import $ from 'jquery';
import 'bootstrap';

class UserForm extends Component {

  state = {
    FirstName: '',
    LastName: "",
    email: '' ,
    role: ""
  
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user && !this.props.user) {
      const { FirstName, email ,LastName , role} = nextProps.user;
      this.setState({ FirstName, email,LastName , role});
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      $(`#${this.props.modalId}`).modal('show');
    } else {
      $(`#${this.props.modalId}`).modal('hide');
    }
  }

  handleSubmit = (e) => {
    const { FirstName, email , LastName ,role} = this.state;
    e.preventDefault();
    this.props.handleSubmit({ FirstName, email ,LastName ,role});
  }
  
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { close, modalId, title, alert } = this.props;
    const { FirstName, email ,LastName ,role} = this.state;
    return (
      <div className="modal fade in" id={modalId} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" onClick={close}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Alert alert={alert} />
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="FirstName"
                      value={FirstName}
                      placeholder="Name"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="LastName"
                      value={LastName}
                      placeholder="last name"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="role"
                      value={role}
                      placeholder="role"
                      onChange={this.handleOnChange}
                      className="form-control" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={close}>Close</button>
                <input
                  type="submit"
                  name="Save changes"
                  placeholder="New user"
                  className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
