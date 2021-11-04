import React from 'react';

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function () {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Water project
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
