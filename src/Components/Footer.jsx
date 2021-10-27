import React from 'react';
import { AppBar, Toolbar, Grid, makeStyles, IconButton } from "@material-ui/core";
import { theme } from "../theme/theme"
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram-.svg";
import { ReactComponent as PrunedgeLogo1 } from "../assets/prunedge-logo1.svg";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#272833",
    // position: "absolute",
    // bottom: 0
  }
})

function Footer() {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(3)}>
          <Grid item>
            <IconButton component="span">
              <PrunedgeLogo1 />
            </IconButton>
          </Grid>
          <Grid item style={{fontSize: 14}}> 
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
