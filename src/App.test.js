// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MantineDesign title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MantineDesign/i);
    expect(titleElement).toBeInTheDocument();
});
