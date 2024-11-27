import React, { memo, Suspense, lazy } from "react";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";

// Lazy load CircularProgress and LinearProgress components
const LazyCircularProgress = lazy(
    () => import("@mui/material/CircularProgress")
);
const LazyLinearProgress = lazy(() => import("@mui/material/LinearProgress"));

export const MuiProgress = memo(() => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Stack spacing={2}>
                {/* Circular Progress Indicators */}
                <LazyCircularProgress aria-label="Loading" />
                <LazyCircularProgress color="success" aria-label="Loading success" />
                <LazyCircularProgress
                    variant="determinate"
                    value={60}
                    aria-label="60% complete"
                />

                {/* Linear Progress Indicators */}
                <LazyLinearProgress aria-label="Loading" />
                <LazyLinearProgress color="success" aria-label="Loading success" />
                <LazyLinearProgress
                    variant="determinate"
                    value={60}
                    aria-label="60% complete"
                />
            </Stack>
        </Suspense>
    );
});
