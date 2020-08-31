import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { allUsersQuery, deleteUserQuery } from '../../queries/users';

class ListItem extends Component {
  handleDeleteUser = (e) => {
    const { deleteUser, user, alert } = this.props;
    deleteUser({
      variables: {
        id: user.id,
      },
      refetchQueries: [ { query: allUsersQuery }]
    })
    .then((res) => {
      alert({
        success: 'The user was deleted!'
      });
    }).catch((error) => {
      alert({
        danger: error.message
      });
    });
  }

  handleEditUser = () => {
    this.props.editUser(this.props.user);
  }

  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.FirstName}</td>
        <td>{user.LastName}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td><button onClick={this.handleEditUser} className="btn btn-primary">Edit</button></td>
        <td><button onClick={this.handleDeleteUser} className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
}

export default compose(
  graphql(deleteUserQuery, { name: 'deleteUser' }),

)(ListItem);



