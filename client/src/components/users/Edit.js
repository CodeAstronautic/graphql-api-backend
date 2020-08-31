import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { updateUserQuery } from '../../queries/users';
import Form from './Form';

class Edit extends Component {
  state = {
    alert: ''
  }

  handleSubmit = (values) => {
    const { FirstName, email , LastName ,role} = values;
    const { user, mutate, alert, close } = this.props;
    mutate({
      variables: {
        id: user.id,
        FirstName,
        LastName ,
        email,
        role
      }
    })
    .then((res) => {
      alert({
        success: 'The user was updated!'
      });
      close();
    }).catch((error) => {
      this.setState({
        alert: {
          type: 'danger',
          message: error.message
        }
      });
    });
  };

  render() {

    return (
      <Form
        modalId="editUserModal"
        title="Edit User"
        handleSubmit={this.handleSubmit}
        user={this.props.user}
        close={this.props.close}
        alert={this.state.alert} />
    );
  }
}

export default graphql(updateUserQuery)(Edit);
