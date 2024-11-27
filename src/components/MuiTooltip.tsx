import React, { memo, Suspense, lazy } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// Lazy load DeleteIcon component
const LazyDeleteIcon = lazy(() => import('@mui/icons-material/Delete'));

/**
 * MuiTooltip Component
 * 
 * This component renders a Material-UI Tooltip with a lazy-loaded DeleteIcon inside an IconButton.
 * 
 * Features:
 * - Lazy loading: The DeleteIcon component is loaded only when needed, reducing the initial load time.
 * - Memoization: The component is memoized using React.memo to prevent unnecessary re-renders.
 * - Suspense: A fallback UI is displayed while the DeleteIcon is being loaded.
 * 
 * Props:
 * - None
 * 
 * Usage:
 * ```jsx
 * import MuiTooltip from './MuiTooltip';
 * 
 * function App() {
 *   return <MuiTooltip />;
 * }
 * ```
 */
const MuiTooltip = memo(() => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Tooltip
                title="Delete item"
                placement="left-start"
                arrow
                enterDelay={500}
                leaveDelay={200}
                aria-label="Delete item"
            >
                <IconButton aria-label="Delete" role="button">
                    {/* Lazy loaded DeleteIcon */}
                    <LazyDeleteIcon aria-hidden="true" />
                </IconButton>
            </Tooltip>
        </Suspense>
    );
});

export default MuiTooltip;
