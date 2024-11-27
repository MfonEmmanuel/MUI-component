import React, { memo } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
} from "@mui/material";
import CatchingPokemanIcon from "@mui/icons-material/CatchingPokemon";

// Memoize the component to prevent unnecessary re-renders
const MuiNavbar = memo(() => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* IconButton with aria-label for accessibility */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Pokeman logo"
                >
                    <CatchingPokemanIcon />
                </IconButton>
                {/* Typography with flexGrow to push the stack to the right */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKEMANAPP
                </Typography>
                {/* Stack to arrange buttons horizontally */}
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Feature</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
});

export default MuiNavbar;
