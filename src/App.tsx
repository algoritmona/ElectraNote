import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NewNote } from './NewNote'

const App = () => {
  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}> </Route>
        <Route path="/new" element={<NewNote />}> </Route>
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} /> 
          <Route path="edit" element={<h1>Edit</h1>}> </Route>
        </Route>
        <Route path="*" element={<Navigate to='/' />}> </Route>
      </Routes>
    </Container>
  )
}

export default App