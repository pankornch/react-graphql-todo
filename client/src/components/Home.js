import React from 'react'
import { useQuery } from '@apollo/client'
import { Container, Spinner } from 'react-bootstrap'
import { GET_TODOS } from '../GraphQL'
import DisplayTodo from './DisplayTodo'
import AddTodo from './AddTodo'

const Home = () => {

    const { data, loading } = useQuery(GET_TODOS)

    if (loading) return <Spinner animation="grow" variant="info" />

    return (
        <Container>
            <AddTodo />
            <DisplayTodo todos={data.todos} />
        </Container>
    )
}

export default Home