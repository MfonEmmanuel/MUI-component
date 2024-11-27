import { render, screen } from "@testing-library/react";
import MuiNavbar from "../components/MuiNavbar";

describe("MuiNavbar", () => {
  test("renders the navbar with all buttons", () => {
    render(<MuiNavbar />);
    // Check if the logo is present
    expect(screen.getByLabelText(/Pokeman logo/i)).toBeInTheDocument();
    // Check if all buttons are present
    expect(screen.getByText(/Feature/i)).toBeInTheDocument();
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
