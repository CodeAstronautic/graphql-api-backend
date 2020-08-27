module.exports = async (_, {}, {models}) => {
  return await models.User.find();
};


