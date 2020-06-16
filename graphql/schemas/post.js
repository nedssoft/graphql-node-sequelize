const { gql } = require('apollo-server-express');

module.exports = gql`

 type Post {
     id: Int!
     title: String!
     content: String!
     author: User!
     comments: [Comment!]
     createdAt: String

 }

extend type Query {
    getAllPosts: [Post!]
    getSinglePost(postId: Int!): Post
}
 extend type Mutation {
     createPost(title: String!, content: String!): CreatePostResponse
 }

 type CreatePostResponse {
    id: Int!
    title: String!
    content: String!
    createdAt: String!
 }

`;
