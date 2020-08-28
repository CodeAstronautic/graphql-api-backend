const { ApolloError } = require("apollo-server");
module.exports = async (_, {id, input}, {models}) => {

  try{
    const userToUpdate = await models.User.findOne({_id: id});

    if(!userToUpdate) throw new ApolloError(`Could not find user with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      userToUpdate[value] = input[value];
    });

    const updatedUser = await userToUpdate.save();

    return updatedUser
  }
  catch(e){
    throw new ApolloError(e)
  }
} ;
