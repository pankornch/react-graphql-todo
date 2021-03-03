import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query {
        todos {
            _id
            title
            completed
            createdAt
        }
    }
`

export const ADD_TODO = gql`
    mutation ($title: String!) {
        addTodo(title: $title) {
            _id
            title
            completed
            createdAt
        }
    }
`

export const EDIT_TODO = gql`
    mutation ($id: ID!, $title: String, $completed: Boolean) {
        editTodo(id: $id, title: $title, completed: $completed) {
            _id
            title
            completed
            createdAt
        }
    }
`

export const DELETE_TODO = gql`
    mutation ($id: ID!) {
        deleteTodo(id: $id)
    }
`