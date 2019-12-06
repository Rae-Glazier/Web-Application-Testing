import React from 'react';
import { render, getByTestId} from '@testing-library/react';
import App from './App';

test('buttons are rendered', () => {

  const {getByTestId} = render(<App />);

  // button.getByText('Strike');

  getByTestId(/ball-button/i);
  getByTestId(/strike-button/i);
  getByTestId(/foul-button/i);
  getByTestId(/hit-button/i);
  //data-testid
})

test('renders title', () => {
  const {getByText} = render(<App />);

  getByText(/web application testing/i);
})

test('renders score text', () => {
  const {getByText} = render(<App />);

  getByText(/balls/i);
  getByText(/strikes/i);
})