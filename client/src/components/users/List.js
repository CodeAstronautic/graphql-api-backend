import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { allUsersQuery, likedUserQuery } from '../../queries/users';
import ListItem from './ListItem.js'
//import Search from"./search"
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

  componentWillMount() {
    this.props.data.subscribeToMore({
      document: likedUserQuery,
      updateQuery: (prev) => {
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
    const items = users.filter((data) =>{
      if(this.state.search == null)
          return data
      else if(data.role.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
    return (
      
      <table className="table">
        <tbody>
          <tr>
           <td></td>
          </tr>
          <ListItem
            key={data.id}
            user={data}
            editUser={this.props.editUser}
            alert={this.props.alert}/>
        </tbody>
      </table>
    );
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
