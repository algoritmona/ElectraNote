import { Col, Form, Row, Stack, Button } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable'
import { Link } from "react-router-dom"

export function NoteForm() {
    return <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>                    
                    </Col>
                    <Col>
                        <Form.Group controlId='tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect isMulti/>
                        </Form.Group>                    
                    </Col>
                </Row>
                <Form.Group controlId='markdow'>
                            <Form.Label>Body</Form.Label>
                            <Form.Control required as='textarea' rows={20}/>
                </Form.Group>
                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    <Button type='submit' variant='warning'>Save</Button>
                    <Link to='..'>
                    <Button type='button' variant='secondary'>Cancel</Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
}  