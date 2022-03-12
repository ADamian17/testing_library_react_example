import logo from './logo.svg';
import './App.css';
import { Container, Form } from 'react-bootstrap';

function App() {
  return (
    <Container className='my-5'>
     <Form>
       <Form.Group className='mb-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control 
          type='email' 
          placeholder='Enter email' 
          data-testid='form-input-email' />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control 
          type='password' 
          placeholder='Enter password' 
          data-testid='form-input-password' />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control 
          type='password' 
          placeholder='Confirm password' 
          data-testid='form-input-confirm-password' />
       </Form.Group>
     </Form>
    </Container>
  );
}

export default App;
