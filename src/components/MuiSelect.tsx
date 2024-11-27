import { Box, TextField } from "@mui/material";
import { useState, useCallback, memo, lazy, Suspense } from "react";

// Lazy load the MenuItem component for performance optimization
const LazyMenuItem = lazy(() => import("@mui/material/MenuItem"));

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  // Memoize the handleChange function to prevent unnecessary re-renders
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  }, []);

  return (
    <Box width="250px">
      <TextField
        label="Select country(s)"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
        // Add aria-label for accessibility
        inputProps={{ 'aria-label': 'Select country(s)' }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMenuItem value="US">USA</LazyMenuItem>
          <LazyMenuItem value="NI">Nigeria</LazyMenuItem>
          <LazyMenuItem value="GH">Ghana</LazyMenuItem>
        </Suspense>
      </TextField>
    </Box>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(MuiSelect);
