import React from "react";
import { CircularProgress, Typography, Box } from '@mui/material';

export default function CircleProgressWithLabel ({value, techName, className}) {
    let progressColor;

    // Set color based on techName
    switch (techName.toLowerCase()) {
      case 'js':
        progressColor = 'yellow';
        break;
      case 'c#':
        progressColor = 'purple';
        break;
      case 'node.js':
        progressColor = 'green';
        break;
      case 'angular':
        progressColor = 'red';
        break;
      // Add more cases as needed
      default:
        progressColor = 'blue'; // Default color
    }

    return (
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            margin: '0 10px',
            marginBottom:'30px',// Add space between circular bars
            ...className, // Apply custom styles from the className prop
          }}
        >
          <CircularProgress
            variant="determinate"
            value={value}
            size={70}
            thickness={4}
            sx={{
              color: progressColor,
              flexDirection: 'column', // Set flex direction to column
              '@media screen and (max-width: 900px)': {
                flexDirection: 'row', // Set flex direction back to row for larger screens
              },
            }}
          />
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
