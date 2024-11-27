import React, { memo } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
} from "@mui/material";

/**
 * MuiCard component displays a card with an image, title, description, and action buttons.
 * 
 * @component
 * @example
 * return (
 *   <MuiCard />
 * )
 */
const MuiCard = () => {
    return (
        <Box width="300px" role="region" aria-label="React information card">
            <Card component="article">
                <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/200/300"
                    alt="Card media"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        React is a JavaScript library for building user interfaces.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" aria-label="Share this card">Share</Button>
                    <Button size="small" aria-label="Learn more about React">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default memo(MuiCard);
