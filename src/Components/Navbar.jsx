import React from 'react'
import { AppBar, Toolbar, makeStyles, Grid, IconButton, InputBase } from '@material-ui/core'
import Button from "../Resuables/Button"
import { theme } from "../theme/theme"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.info.main,
    paddingLeft: theme.spacing(13.375),
    paddingRight: theme.spacing(13.875),
    "& .MuiToolbar-gutters": {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    "& a": {
      textDecoration: "none"
    }
  },
  searchBar: {
    fontSize: theme.typography.fontSize,
    border: "1px solid #ccc",
    opacity: "0.6",
    position: "relative",
    top: 8,
    marginRight: "40px",
    paddingLeft: theme.spacing(1),
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1)
    }
  },
  btn1: {
    marginRight: "20px"
  }
})

function Navbar({renderLogo, handleClick}) {

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(3)}>
          <Grid item>
            <Link to="/">
              <IconButton component="span">
                {renderLogo()}
              </IconButton>
            </Link>
          </Grid>
          <Grid item style={{fontSize: 14}}> 
            <InputBase 
              className={classes.searchBar}
              startAdornment={<SearchIcon fontSize="small" />}
              placeholder="Search"
            />
            <Link to="/category">
              <Button text="Explore Categories" variant="outlined" className={classes.btn1} />
            </Link>
            <Button text="Sign in" className={classes.btn2} onClick={handleClick} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
