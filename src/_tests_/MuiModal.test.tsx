import { render, screen, fireEvent } from '@testing-library/react';
import MuiModal from '../components/MuiModal';

describe('MuiModal', () => {
  test('opens and closes the modal', () => {
    render(<MuiModal />);
    const openButton = screen.getByRole('button', { name: /open modal dialog/i });
    fireEvent.click(openButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /close me/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('closes the modal on escape key press', () => {
    render(<MuiModal />);
    const openButton = screen.getByRole('button', { name: /open modal dialog/i });
    fireEvent.click(openButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
