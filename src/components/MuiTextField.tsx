import React, { useState, useCallback } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

interface MuiTextFieldProps {
    /** The label for the text field */
    label: string;
    /** The current value of the text field */
    value: string;
    /** Callback function called when the value changes */
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /** Indicates whether the text field should display an error state */
    error?: boolean;
    /** Helper text displayed below the text field */
    helperText?: string;
    /** The type of input (e.g., text, password) */
    type?: string;
    /** Input properties for customizing the input field */
    InputProps?: {
        startAdornment?: React.ReactNode;
        endAdornment?: React.ReactNode;
        readonly?: boolean;
    };
}

/**
 * MuiTextField is a customizable text field component that supports various input types,
 * error states, and helper text. It is optimized for accessibility and performance.
 */
const MuiTextField: React.FC<MuiTextFieldProps> = React.memo(
    function ({
        label, value, onChange, error = false, helperText = "", type = "text", InputProps,
    }) {
        const [localValue, setLocalValue] = useState(value);

        // Handle change event for the text field
        const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setLocalValue(event.target.value);
            onChange(event);
        }, [onChange]);

        return (
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label={label}
                        value={localValue}
                        onChange={handleChange}
                        error={error}
                        helperText={helperText}
                        type={type}
                        variant="outlined"
                        aria-describedby={`${label}-helper-text`}
                        aria-live="polite" // Announce changes to the helper text
                    />
                    <TextField
                        label={label}
                        value={localValue}
                        onChange={handleChange}
                        error={error}
                        helperText={helperText}
                        type={type}
                        variant="filled"
                        aria-describedby={`${label}-helper-text`}
                        aria-live="polite" />
                    <TextField
                        label={label}
                        value={localValue}
                        onChange={handleChange}
                        error={error}
                        helperText={helperText}
                        type={type}
                        variant="standard"
                        aria-describedby={`${label}-helper-text`}
                        aria-live="polite" />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label={"small secondary"}
                        size="small"
                        color="secondary"
                        value={localValue}
                        onChange={handleChange}
                        error={error}
                        helperText={helperText}
                        type={type}
                        aria-describedby={`${label}-helper-text`}
                        aria-live="polite" />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label={"Form input"}
                        required
                        value={localValue}
                        onChange={(e) => {
                            setLocalValue(e.target.value);
                            onChange(e);
                        }}
                        error={!localValue}
                        helperText={!localValue ? "Required" : "Do not share your password with anyone!"}
                        aria-live="polite" />
                    <TextField
                        label={"Password"}
                        type={"password"}
                        helperText={"please do not share your password"}
                        aria-live="polite" />
                    <TextField
                        label={"Read only"}
                        InputProps={{ readOnly: true }} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField
                        label={"Amount"}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }} />
                    <TextField
                        label={"Weight"}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>
                        }} />
                </Stack>
            </Stack>
        );
    }
);

export default MuiTextField;