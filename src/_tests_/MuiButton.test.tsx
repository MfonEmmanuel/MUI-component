import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MuiButton from '../components/MuiButton';

describe('MuiButton', () => {
  const onClickMock = jest.fn();

  it('renders button with label and handles click event', () => {
    render(<MuiButton onClick={onClickMock} label="Send Button" />);

    // Get the button by its label
    const sendButton = screen.getByLabelText('Send Button');
    expect(sendButton).toBeInTheDocument(); // Ensure it is in the document

    // Simulate a click event
    fireEvent.click(sendButton);
    expect(onClickMock).toHaveBeenCalledTimes(1); // Ensure the click handler is called
  });
});