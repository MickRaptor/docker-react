import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Coucou Ceci Fonctionne 2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Coucou Ceci Fonctionne 2/i);
  expect(linkElement).toBeInTheDocument();
});