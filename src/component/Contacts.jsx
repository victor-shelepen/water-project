import React from "react";
import { Box, Paper, Typography, Container } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import { makeStyles } from '@material-ui/core/styles';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  paper: {
    background: red
  }
}));

export default function () {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        width={"100%"} height={400}
        bgcolor="lightyellow"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
            <Paper elevation={3} className={classes.paper}>
              <Typography align="center">
                Contacts
              </Typography>
              <div className={classes.container} >
                <div>
                  <MailIcon /> victor.shelepen@gmail.com
                </div>
                <div>
                  <PhoneIcon /> +380958464017
                </div>
              </div>
            </Paper>
        </Box>
      </Box>
    </>
  )
}