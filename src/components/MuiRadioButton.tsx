import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormHelperText,
} from "@mui/material";
import React, { useState, memo } from "react";

// Memoize the component to prevent unnecessary re-renders
const MuiRadioButton = memo(() => {
    const [value, setValue] = useState("");
    console.log({ value });

    // Handle change event for radio buttons
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Box>
            {/* FormControl with error state and aria-labelledby for accessibility */}
            <FormControl error id="job-experience-group-level">
                <FormLabel>Years of experience</FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    aria-labelledby="job-experience-group-level"
                    value={value}
                    onChange={handleChange}
                    row
                >
                    {/* FormControlLabel with Radio buttons */}
                    <FormControlLabel
                        value="0-2"
                        control={<Radio size="medium" color="secondary" />}
                        label="0-2 years"
                    />
                    <FormControlLabel value="3-5" control={<Radio />} label="3-5 years" />
                    <FormControlLabel
                        value="6-10"
                        control={<Radio />}
                        label="6-10 years"
                    />
                </RadioGroup>
                <FormHelperText>invalid selection</FormHelperText>
            </FormControl>
        </Box>
    );
});

export default MuiRadioButton;
