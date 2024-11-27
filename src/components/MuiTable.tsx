import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import { memo, lazy, Suspense, useCallback } from "react";

// Lazy load the CheckIcon component to improve performance
const CheckIcon = lazy(() => import("@mui/icons-material/Check"));

// Memoize the AlertContent component to prevent unnecessary re-renders
const AlertContent = memo(() => {
  // useCallback to memoize the handleClose function
  const handleClose = useCallback(() => {
    alert("Close Alert");
  }, []);

  return (
    <Stack spacing={2}>
      {/* Skip link for better accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Error alert with assertive aria-live for immediate announcement */}
      <Alert severity="error" role="alert" aria-live="assertive">
        This is an error message
      </Alert>

      {/* Info alert with polite aria-live for non-urgent announcement */}
      <Alert severity="info" role="alert" aria-live="polite">
        This is an info message
      </Alert>

      {/* Warning alert with polite aria-live for non-urgent announcement */}
      <Alert severity="warning" role="alert" aria-live="polite">
        This is a warning message
      </Alert>

      {/* Success alert with polite aria-live for non-urgent announcement */}
      <Alert severity="success" role="alert" aria-live="polite">
        This is a success message
      </Alert>

      {/* Outlined error alert with close button */}
      <Alert
        variant="outlined"
        severity="error"
        onClose={handleClose}
        role="alert"
        aria-live="assertive"
      >
        This is an error message
      </Alert>

      {/* Outlined info alert */}
      <Alert
        variant="outlined"
        severity="info"
        role="alert"
        aria-live="polite"
      >
        This is an info message
      </Alert>

      {/* Outlined warning alert */}
      <Alert
        variant="outlined"
        severity="warning"
        role="alert"
        aria-live="polite"
      >
        This is a warning message
      </Alert>

      {/* Outlined success alert */}
      <Alert
        variant="outlined"
        severity="success"
        role="alert"
        aria-live="polite"
      >
        This is a success message
      </Alert>

      {/* Filled error alert with title */}
      <Alert
        variant="filled"
        severity="error"
        role="alert"
        aria-live="assertive"
      >
        <AlertTitle>error</AlertTitle>
        This is an error message
      </Alert>

      {/* Filled info alert with title */}
      <Alert
        variant="filled"
        severity="info"
        role="alert"
        aria-live="polite"
      >
        <AlertTitle>info</AlertTitle>
        This is an info message
      </Alert>

      {/* Filled warning alert with title */}
      <Alert variant="filled" severity="warning" role="alert" aria-live="polite">
        <AlertTitle>warning</AlertTitle>
        This is a warning message
      </Alert>

      {/* Filled success alert with title, custom icon, and action button */}
      <Suspense fallback={<div>Loading...</div>}>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          action={
            <Button color="inherit" size="small" aria-label="Undo action">
              UNDO
            </Button>
          }
          role="alert"
          aria-live="polite"
        >
          <AlertTitle>success</AlertTitle>
          This is a success message
        </Alert>
      </Suspense>
    </Stack>
  );
});

// Set display name for the memoized component
AlertContent.displayName = "AlertContent";

export default AlertContent;
