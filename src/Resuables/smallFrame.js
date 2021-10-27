import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { theme } from "../theme/theme"

const useStyles = makeStyles({
  basic: {
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: "1.1429rem",
    lineHeight: "21px"
  }
})

function SmallFrame({smallBg, text1, text2}) {

  const classes = useStyles();
  return (
    <Box display="flex">
      <Box
        component="img"
        alt=""
        src={smallBg}
      />
      <Box className={classes.basic}>
        <Typography>{text1}</Typography>
        <Typography>{text2}</Typography>
      </Box>
    </Box>
  )
}

export default SmallFrame
