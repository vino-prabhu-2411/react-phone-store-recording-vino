import React from 'react'
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <Container>
                    <Row>
                        <Col sm={3}>
                            <Form.Label >Username</Form.Label></Col>
                        <Col sm={5}><Form.Control type="text" placeholder="Enter Username" /></Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Form.Label >Password</Form.Label></Col>
                        <Col sm={5}><Form.Control type="password" placeholder="Enter Password" /></Col>
                    </Row>
                </Container>

                <div>
                    <Button type="submit" variant="primary">Submit</Button>
                </div>
            </form>
        )
    }
}
export default Login