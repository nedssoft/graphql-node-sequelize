const { gql } = require('apollo-server-express');

module.exports = gql`

 type Comment {
     id: Int!
     content: String!
     author: User!
     post: Post!
     createdAt: String
 }

 extend type Mutation {
     createComment(content: String!): CreateCommentResponse
 }

 type CreateCommentResponse {
    content: String!
    createdAt: String!
 }

`;
