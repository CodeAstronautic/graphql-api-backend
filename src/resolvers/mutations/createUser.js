const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newUser = await models.User.create(input);
    return newUser
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
