import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MuiProgress } from "../components/MuiProgress";

describe("MuiProgress", () => {
  test("renders all progress indicators", async () => {
    render(<MuiProgress />);

    // Check for CircularProgress elements
    expect(await screen.findByLabelText("Loading")).toBeInTheDocument();
    expect(await screen.findByLabelText("Loading success")).toBeInTheDocument();
    expect(await screen.findByLabelText("60% complete")).toBeInTheDocument();

    // Check for LinearProgress elements
    expect(await screen.findByLabelText("Loading")).toBeInTheDocument();
    expect(await screen.findByLabelText("Loading success")).toBeInTheDocument();
    expect(await screen.findByLabelText("60% complete")).toBeInTheDocument();
  });
});
