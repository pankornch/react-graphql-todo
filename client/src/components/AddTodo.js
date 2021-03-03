import { useMutation } from "@apollo/client"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { ADD_TODO, GET_TODOS } from "../GraphQL"

const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const [addTodo] = useMutation(ADD_TODO)

    const handleAddTodo = (e) => {
        e.preventDefault()
        addTodo({
            variables: { title: todo },
            refetchQueries: [
                { query: GET_TODOS }
            ]
        })
        setTodo("")
    }

    return (
        <Form onSubmit={handleAddTodo} className="mt-3">
            <Form.Control onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Type some todo..." />
        </Form>
    )
}

export default AddTodo