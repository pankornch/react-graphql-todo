import { useMutation } from "@apollo/client"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { DELETE_TODO, EDIT_TODO, GET_TODOS } from "../GraphQL"

const DisplayTodo = ({ todos }) => {
    const [formTodo, setFormTodo] = useState({})
    const [editTodo] = useMutation(EDIT_TODO)
    const [deleteTodo] = useMutation(DELETE_TODO)

    const handleEdit = (_todo) => {
        setFormTodo(_todo)
    }

    const handleSave = () => {
        editTodo({
            variables: {
                id: formTodo._id,
                title: formTodo.title
            }
        })
        setFormTodo({})
    }

    const handleToggleTodo = (_todo) => {

        editTodo({
            variables: {
                id: _todo._id,
                completed: !_todo.completed,
            }
        })
    }

    const handleDeleteTodo = (_todo) => {
        if (!window.confirm(`Want to delete ${_todo.title}`)) return
        deleteTodo({ variables: { id: _todo._id }, refetchQueries: [{ query: GET_TODOS }] })

    }


    return (
        <div className="mt-3">
            {
                todos.map(e => (
                    <div key={e._id} className="d-flex justify-content-between align-items-center my-3" >
                        <div className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                checked={e.completed} onChange={() => handleToggleTodo(e)}
                                className="mr-3"
                                style={{ height: "1rem", width: "1rem" }} />
                            {
                                formTodo._id === e._id
                                    ?
                                    <Form.Control
                                        value={formTodo.title}
                                        onChange={e => setFormTodo(prev => ({ ...prev, title: e.target.value }))}
                                        autoFocus
                                    />
                                    :
                                    <span
                                        onDoubleClick={() => handleEdit(e)} style={{ fontSize: "1.2rem" }}
                                    >{e.title}</span>
                            }
                        </div>
                        <div>
                            {
                                formTodo._id === e._id
                                    ?
                                    (
                                        <>
                                            <Button onClick={handleSave} variant="outline-primary">Save</Button>
                                            <Button onClick={() => setFormTodo({})} variant="light" className="ml-3">Cancle</Button>
                                        </>
                                    )
                                    :
                                    <Button onClick={() => handleEdit(e)} variant="outline-warning"> edit </Button>
                            }
                            <Button onClick={() => handleDeleteTodo(e)} variant="outline-danger" className="ml-3">delete</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayTodo