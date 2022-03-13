import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';

import App from './App';

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<App />)
});

const typeIntoForm = ({email, password, confirmPassword }) => {
  const emailEl = screen.getByTestId('form-input-email');
  const passwordEl = screen.getByTestId('form-input-password');
  const confirmPasswordEl = screen.getByTestId('form-input-confirm-password');

  if(email) {
    userEvents.type(emailEl, email);
  }
  if(password) {
    userEvents.type(passwordEl, password);
  }
  if(confirmPassword) {
    userEvents.type(confirmPasswordEl, confirmPassword);
  }

  return {
    emailEl,
    passwordEl,
    confirmPasswordEl
  }
}

test('input should be initially epmty', () => {
  const email = screen.getByTestId('form-input-email');
  const password = screen.getByTestId('form-input-password');
  const confirmPassword = screen.getByTestId('form-input-confirm-password');
  
  expect(email.value).toBe('')
  expect(password.value).toBe('')
  expect(confirmPassword.value).toBe('')
});

test('should be able to type an email', () => {
  const {emailEl} = typeIntoForm({email: 'test@gmail.com'})
  expect(emailEl.value).toBe('test@gmail.com')
});

test('should be able to type a password', () => {
  const {passwordEl} = typeIntoForm({password: '1234'})
  expect(passwordEl.value).toBe('1234')
});

test('should be able to type a confirm password', () => {
  const { confirmPasswordEl } = typeIntoForm({confirmPassword: '1234'});
  expect(confirmPasswordEl.value).toBe('1234')
});

test('should not show email error message', () => {
  const emailError = screen.queryByTestId('form-input-email-error');
  expect(emailError).not.toBeInTheDocument();
});

test('should show email error message on invalid email', () => {
  typeIntoForm({email: 'testgmail.com'})
  
  const submitBtn = screen.getByTestId('form-submit-btn');
  userEvents.click(submitBtn)
  
  const emailError = screen.queryByTestId('form-input-email-error');
  expect(emailError).toBeInTheDocument();
});

test('should not show password error message', () => {
  const passwordError = screen.queryByTestId('form-input-password-error');
  expect(passwordError).not.toBeInTheDocument();
});

test('should show password error message on weak password', () => {
  typeIntoForm({password: '1234'});
  
  const submitBtn = screen.getByTestId('form-submit-btn');
  userEvents.click(submitBtn)
  
  const passwordError = screen.queryByTestId('form-input-password-error');
  expect(passwordError).toBeInTheDocument();
});

test('should not show confirm password error message', () => {
  const confrimPasswordError = screen.queryByTestId('form-input-confirm-password-error');
  expect(confrimPasswordError).not.toBeInTheDocument();
});

test('should show confirm password error message if password does not match', () => {
  const {passwordEl, confirmPasswordEl} = typeIntoForm({
    password: '1234', 
    confirmPassword: '1232'
  });

  expect(passwordEl.value !== confirmPasswordEl.value).toBeTruthy();

  const submitBtn = screen.getByTestId('form-submit-btn');
  userEvents.click(submitBtn)

  const confrimPasswordError = screen.queryByTestId('form-input-confirm-password-error');
  expect(confrimPasswordError).toBeInTheDocument();
});

test('should not show error messages if data is valid', () => {
  typeIntoForm({
    email: 'adonis@gmail.com',
    password: 'XUG0gxf0ztx!rea3vhe',
    confirmPassword: 'XUG0gxf0ztx!rea3vhe'
  });

  const passwordError = screen.queryByTestId('form-input-password-error');
  expect(passwordError).not.toBeInTheDocument();

  const confrimPasswordError = screen.queryByTestId('form-input-confirm-password-error');
  expect(confrimPasswordError).not.toBeInTheDocument();
})
