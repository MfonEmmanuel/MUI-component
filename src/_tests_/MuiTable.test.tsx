import { render, screen } from "@testing-library/react";
import MuiTable from "../components/MuiTable";

test("renders table with data", () => {
    render(<MuiTable />);
    const firstNameElement = screen.getByText(/Julie/i);
    expect(firstNameElement).toBeInTheDocument();
});
