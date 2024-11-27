// import React, { memo, Suspense } from "react";
// import Textarea from "@mui/joy/Textarea";
// import { SxProps } from "@mui/system";
// import "./MuiTextarea.css";

// // Define the props interface for the component
// interface MuiTextareaProps {
//   placeholder?: string; // Placeholder text for the textarea
//   minRows?: number; // Minimum number of rows for the textarea
//   maxRows?: number; // Maximum number of rows for the textarea
//   variant?: "outlined" | "soft" | "solid"; // Variant style of the textarea
//   color?: "neutral" | "primary" | "danger" | "success" | "warning"; // Color theme of the textarea
//   size?: "sm" | "md" | "lg"; // Size of the textarea
//   required?: boolean; // Whether the textarea is required
//   error?: boolean; // Whether the textarea has an error
//   helperText?: string; // Helper text to display when there is an error
//   sx?: SxProps; // Custom styles for the textarea
// }

// // Memoize the component to prevent unnecessary re-renders
// const MuiTextarea: React.FC<MuiTextareaProps> = memo(
//   ({
//     placeholder = "Type something...", // Default placeholder text
//     minRows = 3, // Default minimum rows
//     maxRows = 6, // Default maximum rows
//     variant = "outlined", // Default variant style
//     color = "primary", // Default color theme
//     size = "md", // Default size
//     required = false, // Default required state
//     error = false, // Default error state
//     helperText = "", // Default helper text
//     sx = {}, // Default custom styles
//   }) => {
//     return (
//       <div>
//         <Textarea
//           placeholder={placeholder} // Set placeholder text
//           minRows={minRows} // Set minimum rows
//           maxRows={maxRows} // Set maximum rows
//           variant={variant} // Set variant style
//           color={color} // Set color theme
//           size={size} // Set size
//           required={required} // Set required state
//           aria-invalid={error} // Set ARIA invalid attribute if there's an error
//           aria-describedby={error ? "helper-text" : undefined} // Set ARIA describedby attribute if there's an error
//           className="textarea" // Apply custom CSS class
//           sx={sx} // Apply custom styles
//         />
//         {error && (
//           <p id="helper-text" className="helper-text">
//             {helperText} {/* Display helper text if there's an error */}
//           </p>
//         )}
//       </div>
//     );
//   }
// );

// export default MuiTextarea;

import React, { memo, Suspense } from "react";
import Textarea from "@mui/joy/Textarea";
import { SxProps } from "@mui/system";
import "./MuiTextarea.css";

// Define the props interface for the component
interface MuiTextareaProps {
  placeholder?: string; // Placeholder text for the textarea
  minRows?: number; // Minimum number of rows for the textarea
  maxRows?: number; // Maximum number of rows for the textarea
  variant?: "outlined" | "soft" | "solid"; // Variant style of the textarea
  color?: "neutral" | "primary" | "danger" | "success" | "warning"; // Color theme of the textarea
  size?: "sm" | "md" | "lg"; // Size of the textarea
  required?: boolean; // Whether the textarea is required
  error?: boolean; // Whether the textarea has an error
  helperText?: string; // Helper text to display when there is an error
  sx?: SxProps; // Custom styles for the textarea
  value?: string; // Controlled value of the textarea
  defaultValue?: string; // Default value of the textarea
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // Change event handler
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void; // Focus event handler
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void; // Blur event handler
  disabled?: boolean; // Whether the textarea is disabled
  readOnly?: boolean; // Whether the textarea is read-only
  autoFocus?: boolean; // Whether the textarea should auto-focus
}

// Memoize the component to prevent unnecessary re-renders
const MuiTextarea: React.FC<MuiTextareaProps> = memo(
  ({
    placeholder = "Type something...", // Default placeholder text
    minRows = 3, // Default minimum rows
    maxRows = 6, // Default maximum rows
    variant = "outlined", // Default variant style
    color = "primary", // Default color theme
    size = "md", // Default size
    required = false, // Default required state
    error = false, // Default error state
    helperText = "", // Default helper text
    sx = {}, // Default custom styles
    value, // Controlled value
    defaultValue, // Default value
    onChange, // Change event handler
    onFocus, // Focus event handler
    onBlur, // Blur event handler
    disabled = false, // Default disabled state
    readOnly = false, // Default read-only state
    autoFocus = false, // Default auto-focus state
  }) => {
    return (
      <div>
        <Textarea
          placeholder={placeholder} // Set placeholder text
          minRows={minRows} // Set minimum rows
          maxRows={maxRows} // Set maximum rows
          variant={variant} // Set variant style
          color={color} // Set color theme
          size={size} // Set size
          required={required} // Set required state
          aria-invalid={error} // Set ARIA invalid attribute if there's an error
          aria-describedby={error ? "helper-text" : undefined} // Set ARIA describedby attribute if there's an error
          className="textarea" // Apply custom CSS class
          sx={sx} // Apply custom styles
          value={value} // Set controlled value
          defaultValue={defaultValue} // Set default value
          onChange={onChange} // Set change event handler
          onFocus={onFocus} // Set focus event handler
          onBlur={onBlur} // Set blur event handler
          disabled={disabled} // Set disabled state
          readOnly={readOnly} // Set read-only state
          autoFocus={autoFocus} // Set auto-focus state
        />
        {error && (
          <p id="helper-text" className="helper-text">
            {helperText} {/* Display helper text if there's an error */}
          </p>
        )}
      </div>
    );
  }
);

export default MuiTextarea;

