/**
 * @file MuiCheckbox.test.js
 * @description This file contains unit tests for the MuiCheckbox component using React Testing Library.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import MuiCheckbox from "../components/MuiCheckBox";

describe("MuiCheckbox Component", () => {
    /**
     * @test
     * @description Renders the MuiCheckbox component and verifies that it renders without crashing.
     */
    test("renders without crashing", () => {
        // Render the MuiCheckbox component
        render(<MuiCheckbox />);
        
        // Check if the checkbox with the label "Accept Terms and Conditions" is present
        expect(
            screen.getByLabelText(/Accept Terms and Conditions/i)
        ).toBeInTheDocument();
    });

    /**
     * @test
     * @description Verifies that the checkbox changes its state when clicked.
     */
    test("checkbox changes state on click", () => {
        // Render the MuiCheckbox component
        render(<MuiCheckbox />);
        
        // Get the checkbox element
        const checkbox = screen.getByLabelText(/Accept Terms and Conditions/i);
        
        // Simulate a click event on the checkbox
        fireEvent.click(checkbox);
        
        // Check if the checkbox is checked
        expect(checkbox).toBeChecked();
    });

    /**
     * @test
     * @description Verifies that the skill checkboxes change their state when clicked.
     */
    test("skills checkboxes change state on click", () => {
        // Render the MuiCheckbox component
        render(<MuiCheckbox />);
        
        // Get the HTML skill checkbox element
        const htmlCheckbox = screen.getByLabelText(/HTML skill/i);
        
        // Simulate a click event on the HTML skill checkbox
        fireEvent.click(htmlCheckbox);
        
        // Check if the HTML skill checkbox is checked
        expect(htmlCheckbox).toBeChecked();
    });

    /**
     * @test
     * @description Verifies that an error message is displayed when no skills are selected.
     */
    test("displays error message when no skills are selected", () => {
        // Render the MuiCheckbox component
        render(<MuiCheckbox />);
        
        // Check if the error message is displayed
        expect(
            screen.getByText(/Please select at least one skill/i)
        ).toBeInTheDocument();
    });
});
