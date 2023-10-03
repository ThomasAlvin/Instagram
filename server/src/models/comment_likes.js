module.exports = (sequelize, Sequelize) => {
  const CommentLike = sequelize.define(
    "CommentLikes",
    {},
    {
      paranoid: true,
    }
  );
  return CommentLike;
};
