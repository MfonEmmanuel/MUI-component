import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MuiTextarea from "../components/MuiTextarea";

// Test suite for MuiTextarea component
describe("MuiTextarea", () => {
  // Test case for rendering the component with default props
  it("renders with default props", () => {
    // Render the component
    render(<MuiTextarea />);
    // Get the textarea element by its placeholder text
    const textarea = screen.getByPlaceholderText("Type something...");
    // Assert that the textarea is in the document
    expect(textarea).toBeInTheDocument();
  });

  // Test case for rendering the component with custom props
  it("renders with custom props", () => {
    // Render the component with custom props
    render(
      <MuiTextarea
        placeholder="Enter text"
        minRows={5}
        maxRows={10}
        variant="soft"
        color="success"
        size="lg"
        required
        error
        helperText="This field is required"
      />
    );
    // Get the textarea element by its placeholder text
    const textarea = screen.getByPlaceholderText("Enter text");
    // Assert that the textarea has the aria-invalid attribute set to true
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    // Get the helper text element by its text content
    const helperText = screen.getByText("This field is required");
    // Assert that the helper text is in the document
    expect(helperText).toBeInTheDocument();
  });

  // Test case for rendering the component without error
  it("renders without error", () => {
    // Render the component with error prop set to false
    render(<MuiTextarea error={false} />);
    // Query for the helper text element by its text content
    const helperText = screen.queryByText("This field is required");
    // Assert that the helper text is not in the document
    expect(helperText).not.toBeInTheDocument();
  });

  // Test case for handling change event
  it("handles change event", () => {
    // Mock the onChange handler
    const handleChange = jest.fn();
    // Render the component with the onChange handler
    render(<MuiTextarea onChange={handleChange} />);
    // Get the textarea element by its placeholder text
    const textarea = screen.getByPlaceholderText("Type something...");
    // Simulate a change event on the textarea
    fireEvent.change(textarea, { target: { value: "New text" } });
    // Assert that the onChange handler was called
    expect(handleChange).toHaveBeenCalled();
  });

  // Test case for handling focus event
  it("handles focus event", () => {
    // Mock the onFocus handler
    const handleFocus = jest.fn();
    // Render the component with the onFocus handler
    render(<MuiTextarea onFocus={handleFocus} />);
    // Get the textarea element by its placeholder text
    const textarea = screen.getByPlaceholderText("Type something...");
    // Simulate a focus event on the textarea
    fireEvent.focus(textarea);
    // Assert that the onFocus handler was called
    expect(handleFocus).toHaveBeenCalled();
  });

  // Test case for handling blur event
  it("handles blur event", () => {
    // Mock the onBlur handler
    const handleBlur = jest.fn();
    // Render the component with the onBlur handler
    render(<MuiTextarea onBlur={handleBlur} />);
    // Get the textarea element by its placeholder text
    const textarea = screen.getByPlaceholderText("Type something...");
    // Simulate a blur event on the textarea
    fireEvent.blur(textarea);
    // Assert that the onBlur handler was called
    expect(handleBlur).toHaveBeenCalled();
  });
});
