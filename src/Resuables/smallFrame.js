import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { theme } from "../theme/theme"

  const basic =  {
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }

function SmallFrame({smallBg, text1, text2}) {

  return (
    <Box display="flex" marginBottom={theme.spacing(2.5)}>
      <Box
        component="img"
        alt=""
        src={smallBg}
      />
      <Box sx={basic}>
        <Typography fontSize={14} fontFamily="Ubuntu">{text1}</Typography>
        <Typography fontSize={14} fontFamily="Ubuntu" color="#A7A9BC">{text2}</Typography>
      </Box>
    </Box>
  )
}

export default SmallFrame
