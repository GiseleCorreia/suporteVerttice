import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#003A62', height: '100vh' }} >
        <Paper elevation={8} />
        </Box>
        
      </Container>
    </React.Fragment>
  );
}