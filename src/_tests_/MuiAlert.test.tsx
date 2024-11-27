import { render, screen } from "@testing-library/react";
import MuiAlert from "../components/MuiAlert";

// Test suite for MuiAlert component
test("renders all alert messages", () => {
  // Render the MuiAlert component
  render(<MuiAlert />);
  // Check if the error message is rendered
  expect(screen.getByText("This is an error message")).toBeInTheDocument();
  // Check if the info message is rendered
  expect(screen.getByText("This is an info message")).toBeInTheDocument();
  // Check if the warning message is rendered
  expect(screen.getByText("This is a warning message")).toBeInTheDocument();
  // Check if the success message is rendered
  expect(screen.getByText("This is a success message")).toBeInTheDocument();
});

test("renders outlined alerts", () => {
  // Render the MuiAlert component
  render(<MuiAlert />);
  // Check if the fifth alert has the class "MuiAlert-outlined"
  expect(screen.getAllByRole("alert")[4]).toHaveClass("MuiAlert-outlined");
});

test("renders filled alerts with titles", () => {
  // Render the MuiAlert component
  render(<MuiAlert />);
  // Check if the error title is rendered
  expect(screen.getByText("error")).toBeInTheDocument();
  // Check if the info title is rendered
  expect(screen.getByText("info")).toBeInTheDocument();
  // Check if the warning title is rendered
  expect(screen.getByText("warning")).toBeInTheDocument();
  // Check if the success title is rendered
  expect(screen.getByText("success")).toBeInTheDocument();
});
