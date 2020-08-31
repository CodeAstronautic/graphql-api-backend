import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allUsersQuery } from '../../queries/users'

class Count extends Component {
  render() {
    const {loading, error, allUsers} = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>${error}</div>;
    }
    return (
      <span className="badge badge-secondary">
      </span>
    );
  }
}

export default graphql(allUsersQuery)(Count);
