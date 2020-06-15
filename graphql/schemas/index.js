const { gql } = require('apollo-server-express');

const rootType = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

module.exports = [rootType];