# GraphQL API Example

## Run Local Server

```
npm install
npm start
```
# Write your query or mutation here


# mutation createUser{
  createUser(input:{
    FirstName: "12",
    LastName:"MIshra",
    email:"pooja@gmail.com",
    Role:"art"
  }){
    id
  }
}

# mutation updateUser{
  updateUser(id: "5f478d99fab320516261db54" ,input: {
    FirstName: "POOJA MISHRA",
    email:"Pojja@gmail.com",
     Role:"DEsigner"
  }){
    id
		LastName
  }
}

# mutation deleteUser{
  deleteUser(id:"5f478d8ffab320516261db52"){
	id
  }
}

# query user{
  user{
  }
}





# searched data

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allUsersQuery, likedUserQuery } from '../../queries/users';
import ListItem from './ListItem.js'
import Search from"./search"
class List extends Component {
  constructor(){
    super();

    this.state={
      search:null,
      filtered: [],
      flag: true,
    };
  }
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: likedUserQuery,
      updateQuery: (prev, {subscriptionData}) => {
        return prev;
      }
    });
  }

  render() {
    const {loading, error, users} = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>${error}</div>;
    }
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Exclude</th>

          </tr>
          { users.map(user => <ListItem
            key={user.id}
            user={user}
            editUser={this.props.editUser}
            alert={this.props.alert} />) }
        </tbody>
      </table>
    );
  }
}

export default graphql(allUsersQuery)(List);




# list

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allUsersQuery, likedUserQuery , searchUserQuery } from '../../queries/users';
import ListItem from './ListItem.js'
import Search from"./search"
class List extends Component {
  constructor(){
    super();

    this.state={
      search:null,
      filtered: [],
      flag: true,
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  handleSearchUser = (e) => {
    const {searchUser , user , alert} = this.props;
    searchUser({
      variables: {
        FirstName: user.FirstName
      } ,
      refetchQueries: [{ query : searchUserQuery}]
    })
    .then((res) => {
      alert({
        success : 'user found'
      });
    }).catch((error) => {
      alert({
        danger : error.message
      })
    })
  }

  componentWillMount() {
    this.props.data.subscribeToMore({
      document: likedUserQuery,
      updateQuery: (prev, {subscriptionData}) => {
        return prev;
      }
    });
  }

  render() {
    const {loading, error, users} = this.props.data;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>${error}</div>;
    }
    const items = users.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.FirstName.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
    return (
     <table>
      <tbody>
        <tr style={{position:'relative',left:'10vh'}}>
          <td>FirstName</td>
          <td >LastName</td>
          <td >email</td>
          <ListItem
            key={data.id}
            user={data}
            editUser={this.props.editUser}
            alert={this.props.alert} />
        </tr>
      </tbody>
    </table>
    )
  })
  return (
    <div>
    <input type="text" placeholder="Enter item to be searched"  onChange={(e)=>this.searchSpace(e)} />
    {items}
    </div>
  )
}
}
       
export default graphql(allUsersQuery)(List);
