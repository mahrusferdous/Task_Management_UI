import React, { FormEvent, useReducer, useState } from "react";
import MyNavbar from "./MyNavbar";
import TaskReducer from "../reducers/taskReducer";
import { Task } from "../reducers/taskState";
import { Form, Row, Col, Container, Button, Card } from "react-bootstrap";

const Details = () => {
    const [state, dispath] = useReducer(TaskReducer, { tasks: [] });
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [id, setId] = useState<number>(0);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispath({
            type: "ADD_TASK",
            payload: {
                id: Date.now(),
                title: title,
                description: description,
            },
        });
        setTitle("");
        setDescription("");
    };

    const handleDelete = (id: number) => {
        dispath({
            type: "DELETE_TASK",
            payload: id,
        });
    };

    const handleUpdate = () => {
        dispath({
            type: "UPDATE_TASK",
            payload: {
                id: id,
                title: title,
                description: description,
            },
        });
        setTitle("");
        setDescription("");
        setId(0);
    };

    return (
        <div>
            <MyNavbar />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="primary" type="submit" style={{ margin: "10px" }}>
                            Add Task
                        </Button>
                        <Button variant="primary" onClick={handleUpdate} style={{ margin: "10px" }}>
                            Update Task
                        </Button>
                    </div>
                </Form>

                <br />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {state.tasks.map((task: Task) => (
                        <Card key={task.id} style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>{task.description}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        handleDelete(task.id);
                                    }}
                                    style={{ margin: "10px" }}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        setId(task.id);
                                        setTitle(task.title);
                                        setDescription(task.description);
                                    }}
                                    style={{ margin: "10px" }}
                                >
                                    Update
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Details;
