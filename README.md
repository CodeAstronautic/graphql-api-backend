# graphql-api-backend

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

