import React from "react";
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircleProgressWithLabel ({value, techName, className}) {
    return (
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            margin: '0 10px', // Add space between circular bars
            ...className, // Apply custom styles from the className prop
          }}
        >
          <CircularProgress variant="determinate" value={value} size={100} thickness={2} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="body2" component="div" color="text.secondary">
              {techName}
            </Typography>
          </Box>
        </Box>
    );
}