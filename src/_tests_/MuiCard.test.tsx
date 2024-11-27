/**
 * @file MuiCard.test.js
 * @description This file contains unit tests for the MuiCard component using React Testing Library.
 */

import { render, screen, waitFor } from '@testing-library/react';
import MuiCard from '../components/MuiCard';

describe('MuiCard', () => {
  /**
   * @test
   * @description Renders the MuiCard component and verifies that all expected elements are present.
   * @async
   */
  test('renders the card with correct content', async () => {
    // Render the MuiCard component
    render(<MuiCard />);

    // Wait for the elements to be rendered and verify their presence
    await waitFor(() => {
      // Check if the region with the name "React Information Card" is present
      expect(screen.getByRole('region', { name: /react information card/i })).toBeInTheDocument();

      // Check if the image with the name "Card Media" is present
      expect(screen.getByRole('img', { name: /card media/i })).toBeInTheDocument();

      // Check if the text "React" is present
      expect(screen.getByText(/react/i)).toBeInTheDocument();

      // Check if the description text is present
      expect(screen.getByText(/react is a javascript library for building user interfaces/i)).toBeInTheDocument();

      // Check if the "Share" button is present
      expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();

      // Check if the "Learn More" button is present
      expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
    });
  });
});
