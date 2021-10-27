import React from 'react';
import { Card as MuiCard, CardMedia, CardContent, CardActions, makeStyles, IconButton, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    lineHeight: "24px",
    color: "#393A4A"
  }
})

function Card({diagram, contentText1, contentText2, actionText1, actionText2, renderIcon1, renderIcon2 }) {

  const classes = useStyles();

  return (
    <MuiCard style={{ maxWidth: 392, flexGrow: 1, marginRight: 24 }}>
      <CardMedia
        component="img"
        image={diagram}
        alt="bg-image"
      />
      <CardContent>
        <Typography variant="h5">{contentText1}</Typography>
        <Typography className={classes.text}>{contentText2}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Box component="img" alt="" src={renderIcon1} />
        </IconButton>
        <Typography style={{color: "#6B6C7E"}}>
          {actionText1} <Box component="span">.</Box> {actionText2}
        </Typography>
        <IconButton>
          {renderIcon2()}
        </IconButton>
      </CardActions>
    </MuiCard>
  )
}

export default Card
