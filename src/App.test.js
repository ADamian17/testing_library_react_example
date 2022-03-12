import { render, screen } from '@testing-library/react';
import App from './App';

test('input should be initially epmty', () => {
  /* {render()} this method renders the component that we want to test, in the shadow dom and all it children  */
  render(<App />)

  /* {screen} help us to find the element*/
  const email = screen.getByTestId('form-input-email');
  const password = screen.getByTestId('form-input-password');
  const confirmPassword = screen.getByTestId('form-input-confirm-password');
  
  expect(email.value).toBe('')
  expect(password.value).toBe('')
  expect(confirmPassword.value).toBe('')
})