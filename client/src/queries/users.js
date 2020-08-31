import gql from 'graphql-tag';

export const allUsersQuery = gql`
  query users {
    users {
      id
      FirstName
      LastName
      email
      role
    }
  }
`;

export const createUserQuery = gql`
  mutation createUser( $FirstName: String! , $LastName: String! , $email: String!  , $role : String!) {
    createUser(input:{ FirstName: $FirstName, LastName : $LastName, email: $email , role :$role}) {
      id
      FirstName
      LastName
      email
      role
    }
  }
`;

export const updateUserQuery = gql`
  mutation updateUser($id: ID!, $FirstName: String! , $LastName: String! , $email: String! , $role :String!) {
    updateUser(id: $id , input : { FirstName: $FirstName, LastName : $LastName, email: $email , role :$role}) {
      id
      FirstName
      LastName
      email
      role
    }
  }
`;

export const likeUserQuery = gql`
  mutation updateUser($id: ID!) {
    updateUser(id: $id) {
      id
      likes
    }
  }
`;

export const deleteUserQuery = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const searchUserQuery = gql`
  mutation searchUser($id :IS!){
    searchUser(id:$id){
      id
    }
  }
`
export const likedUserQuery = gql`
  subscription likedUser {
    User(
      filter: {
        mutation_in: [UPDATED]
        updatedFields_contains: "likes"
      }
    ) {
      mutation
      node {
        id
        likes
      }
    }
  }
`


/*
graphql + gatsby
react
nodejs
mongo
mysql
gatsby
css
next .js
*/