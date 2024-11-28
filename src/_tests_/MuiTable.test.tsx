import { render, screen } from "@testing-library/react";
import MuiTable from "../components/MuiTable"; // Adjust the import path as necessary

// Mock data to match the structure used in the component
const tableData = [
  {
    id: 1,
    first_name: "Julie",
    last_name: "Ruff",
    email: "jruff0@theglobeandmail.com",
  },
  {
    id: 2,
    first_name: "Zulema",
    last_name: "Frediani",
    email: "zfrediani1@ning.com",
  },
  // Add more mock data as needed
];

test("renders table with correct headers", () => {
  render(<MuiTable />);
  const headers = ["Id", "First Name", "Last Name", "Email"];
  headers.forEach((header) => {
    expect(screen.getByText(header)).toBeInTheDocument();
  });
});

test("renders correct number of rows", () => {
  render(<MuiTable />);
  const rows = screen.getAllByRole("row");
  // Including header row, so total rows should be tableData.length + 1
  expect(rows).toHaveLength(tableData.length + 1);
});
