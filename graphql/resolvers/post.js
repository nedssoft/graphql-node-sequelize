const { Post } = require('../../database/models');

const { AuthenticationError } = require('apollo-server-express');

module.exports = {
  Mutation: {
    async createPost(_, { content, title }, { user = null }) {
      if (!user) {
        throw new AuthenticationError('You must login to create a post');
      }
      return Post.create({
        userId: user.id,
        content,
        title,
      });
    },
  },

  Query: {
    async getAllPosts(root, args, context) {
      return Post.findAll();
    },
    async getSinglePost(_, { postId }, context) {
      return Post.findByPk(postId);
    },
  },

  Post: {
    author(post) {
      return post.getAuthor();
    },
    comments(post) {
      return post.getComments();
    },
  },
};
