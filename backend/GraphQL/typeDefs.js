const { gql } = require("apollo-server-express");

module.exports = gql`
    type Query {
        todos: [Todo]
        getTodo(id: ID!): Todo
    }   
    type Todo {
        _id: ID!
        title: String!
        completed: Boolean!
        createdAt: String!
    }
    type Mutation {
        addTodo(title: String): Todo
        editTodo(id: ID!, title: String, completed: Boolean): Todo
        deleteTodo(id: ID!): Boolean
    }
`