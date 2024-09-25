// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/The Wins Manager/i);
    expect(headingElement).toBeInTheDocument();
});
