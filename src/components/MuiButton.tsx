import React, { lazy, Suspense, memo } from "react";
import { Stack, Button, IconButton } from "@mui/material";

// Lazy load the SendIcon to reduce the initial load size
const SendIcon = lazy(() => import("@mui/icons-material/Send"));

// Define the props for the MuiButton component
interface MuiButtonProps {
  onClick?: () => void; // Optional onClick handler
  label: string; // Button label
  variant?: "text" | "contained" | "outlined"; // Button variant
  color?: "default" | "inherit" | "primary" | "secondary" | "error" | "warning" | "info" | "success"; // Button color
  size?: "small" | "medium" | "large"; // Button size
}


/**
 * A customizable button component using Material-UI with performance optimizations.
 *
 * @component
 * @example
 * // Usage example:
 * <MuiButton variant="contained" color="primary">
 *   Click me!
 * </MuiButton>
 *
 * @prop {string} variant - The button variant (text, contained, outlined).
 * @prop {string} color - The button color (primary, secondary, error, warning, info, success).
 * @prop {string} size - The button size (small, medium, large).
 * @prop {boolean} disableRipple - Whether to disable the ripple effect.
 * @prop {boolean} disableElevation - Whether to disable elevation (shadow) for contained buttons.
 * @prop {string} href - The URL to navigate to when the button is clicked (for text buttons).
 * @prop {ReactNode} startIcon - An icon to display at the start of the button.
 * @prop {ReactNode} endIcon - An icon to display at the end of the button.
 */

const MuiButton: React.FC<MuiButtonProps> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack spacing={4}>
        {/* Text, Contained, and Outlined Buttons */}
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com" aria-label="Navigate to Google">
            Text
          </Button>

          <Button variant="contained" size="small" aria-label="Small Button">
            Small
          </Button>
          <Button variant="contained" size="medium" aria-label="Medium Button">
            Medium
          </Button>
          <Button variant="contained" size="large" aria-label="Large Button">
            Large
          </Button>
        </Stack>

        {/* Colored Buttons */}
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary" aria-label="Primary Button">
            Primary
          </Button>
          <Button variant="contained" color="secondary" aria-label="Secondary Button">
            Secondary
          </Button>
          <Button variant="contained" color="error" aria-label="Error Button">
            Error
          </Button>
          <Button variant="contained" color="warning" aria-label="Warning Button">
            Warning
          </Button>
          <Button variant="contained" color="info" aria-label="Info Button">
            Info
          </Button>
          <Button variant="contained" color="success" aria-label="Success Button">
            Success
          </Button>
        </Stack>

        {/* Size Options */}
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small" aria-label="Small Size Button">
            Small
          </Button>
          <Button variant="contained" size="medium" aria-label="Medium Size Button">
            Medium
          </Button>
          <Button variant="contained" size="large" aria-label="Large Size Button">
            Large
          </Button>
        </Stack>

        {/* Buttons with Icons */}
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Send Button Clicked")}
            aria-label="Send Button with Icon"
          >
            Send
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            disableElevation
            aria-label="Send Button with Icon"
          >
            Send
          </Button>
          <IconButton aria-label="Send Icon Button" color="success" size="small" data-testid="send-icon">
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Suspense>
  );
};

// Use memoization to avoid unnecessary re-renders
export default memo(MuiButton);