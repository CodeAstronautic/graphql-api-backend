const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {

  const searchUser = await models.User.findOne({_id: id})

  return searchUser
};