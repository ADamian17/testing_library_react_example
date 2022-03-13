import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import validator from 'validator';

import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState(null); 
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validator.isEmail(email)) {
      setEmailError(`${email === '' ? 'Email can not be epmty' : 'Email is invalid'}`)
    } else {
      setEmail('')
    }

    if(!validator.isStrongPassword(password)) {
      setPasswordError(`${ password === '' ? 'Password can not be epmty' : 'Password is to weak'}`)
    } else {
      setPassword('')
    }

    if(password !== confirmPassword) {
      setConfirmPasswordError('Passwword does not match')
    } else {
      setConfirmPassword('')
    }
  }

  // zgk.reg6ajq!RUB!drj

  return (
    <Container className='my-5 shadow p-5'>
     <Form>
       <Form.Group className='mb-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control 
          type='email'
          value={email}
          onChange={(e) => {
            if (emailError) setEmailError('');
            return setEmail(e.target.value)
          }} 
          placeholder='Enter email' 
          data-testid='form-input-email' />
          {
            emailError && (
            <Form.Text 
              className="text-danger"
              data-testid='form-input-email-error'>
              {emailError}
            </Form.Text>
            )
          }
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control 
          type='password'
          value={password}
          onChange={(e) => {
            if (passwordError) setPasswordError('');
            return setPassword(e.target.value)
          }}
          placeholder='Enter password' 
          data-testid='form-input-password' />
          {
            passwordError && (
            <Form.Text 
              className="text-danger"
              data-testid='form-input-password-error'>
              {passwordError}
            </Form.Text>
            )
          }
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control 
          type='password'
          value={confirmPassword}
          onChange={(e) => {
            if (confirmPasswordError) setConfirmPasswordError(''); 
            return setConfirmPassword(e.target.value)
          }} 
          placeholder='Confirm password' 
          data-testid='form-input-confirm-password' />
          {
            confirmPasswordError && (
            <Form.Text 
              className="text-danger"
              data-testid='form-input-confirm-password-error'>
              {confirmPasswordError}
            </Form.Text>
            )
          }
       </Form.Group>

        <Button
          onClick={handleSubmit} 
          variant='primary' 
          type='submit'
          data-testid='form-submit-btn'>
          Submit
        </Button>
     </Form>

    </Container>
  );
}

export default App;
