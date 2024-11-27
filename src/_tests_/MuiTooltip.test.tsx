import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MuiTooltip from '../components/MuiTooltip';

test('renders tooltip with lazy-loaded DeleteIcon', async () => {
  render(<MuiTooltip />);

  // Check if the fallback is displayed initially
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for the lazy-loaded component to be displayed
  await waitFor(() => expect(screen.getByLabelText('Delete')).toBeInTheDocument());

  // Check if the tooltip is rendered with the correct title
  expect(screen.getByLabelText('Delete item')).toBeInTheDocument();
});
