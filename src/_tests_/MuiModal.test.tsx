/**
 * @file MuiModal.test.js
 * @description This file contains unit tests for the MuiModal component using React Testing Library.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import MuiModal from '../components/MuiModal';

describe('MuiModal', () => {
  /**
   * @test
   * @description Renders the MuiModal component and verifies that the modal opens and closes correctly.
   */
  test('opens and closes the modal', () => {
    // Render the MuiModal component
    render(<MuiModal />);
    
    // Get the button that opens the modal
    const openButton = screen.getByRole('button', { name: /open modal dialog/i });
    
    // Simulate a click event on the open button
    fireEvent.click(openButton);
    
    // Check if the modal dialog is present
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // Get the button that closes the modal
    const closeButton = screen.getByRole('button', { name: /close me/i });
    
    // Simulate a click event on the close button
    fireEvent.click(closeButton);
    
    // Check if the modal dialog is no longer present
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  /**
   * @test
   * @description Verifies that the modal closes when the escape key is pressed.
   */
  test('closes the modal on escape key press', () => {
    // Render the MuiModal component
    render(<MuiModal />);
    
    // Get the button that opens the modal
    const openButton = screen.getByRole('button', { name: /open modal dialog/i });
    
    // Simulate a click event on the open button
    fireEvent.click(openButton);
    
    // Check if the modal dialog is present
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // Simulate a keydown event for the escape key
    fireEvent.keyDown(window, { key: 'Escape' });
    
    // Check if the modal dialog is no longer present
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
