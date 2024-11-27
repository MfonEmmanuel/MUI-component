import { render, screen, fireEvent } from "@testing-library/react";
import MuiRadioButton from "../components/MuiRadioButton";

describe("MuiRadioButton", () => {
  test("renders the radio buttons and handles selection", () => {
    render(<MuiRadioButton />);
    // Check if the form label is present
    expect(screen.getByText(/Years of experience/i)).toBeInTheDocument();
    // Check if all radio buttons are present
    expect(screen.getByLabelText(/0-2 years/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/3-5 years/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/6-10 years/i)).toBeInTheDocument();

    // Simulate a change event
    fireEvent.click(screen.getByLabelText(/3-5 years/i));
    expect(screen.getByLabelText(/3-5 years/i)).toBeChecked();
  });
});
