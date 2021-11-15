import { React } from 'react';
import { Box, Paper, makeStyles } from "@material-ui/core";
import { TextField, InputAdornment } from '@mui/material';
import { Modal as MuiModal } from '@mui/material'
import Typography from '@mui/material/Typography'
import { theme } from "../theme/theme";
import { ReactComponent as Azure } from "../assets/azure.svg";
import { ReactComponent as Email} from "../assets/email.svg";

const modalStyle= {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const useStyles = makeStyles({
  input: {
    backgroundColor: theme.palette.secondary.main,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    "& > .MuiInputBase-input": {
      color: theme.palette.primary.main
    }
  }
})
const box2 = {
  display: "grid",
  placeItems: "center",
  padding: theme.spacing(10, 12.5, 12, 12.5),
}

const subHeading = {
  paddingTop: theme.spacing(4.5),
  paddingBottom: theme.spacing(8)
}

function Modal({open, close, renderLogo, renderIcon, heading, handleClose, text2, bg }) {

  const classes = useStyles();
// const bg = false
  return (
    <MuiModal
      open={open}
      onClose={close}
    >
      <Box style={modalStyle} width="826px" height="500px" position="absolute" bgcolor={bg && "black"} component={!bg && Paper} >
        <Box position="absolute" right="32px" top="40px" onClick={handleClose}>
          {renderIcon()}
        </Box>
        <Box 
          sx={box2}
        >
          {renderLogo()}
          <Typography variant="h4" sx={subHeading}>{heading}</Typography>
          <Box className={classes.box}>
            <TextField 
              variant="outlined"
              placeholder="Sign in with email" 
              InputProps={{
                style: {textAlign: "center"},
                startAdornment: <InputAdornment position="start"><Email fontSize="small"/></InputAdornment>,
              }}
              sx={{marginBottom: theme.spacing(1)}}
              className={classes.input} 
              color="grey"
              size="small"
            />
            <TextField 
              variant="outlined"
              placeholder="Sign in with Azure ID" 
              InputProps={{
                style: {textAlign: "center"},
                startAdornment: <InputAdornment position="start"><Azure fontSize="small"/></InputAdornment>,
              }}
              size="small"
            />
          </Box>
          <Typography 
            variant="subtitle1" 
            paddingTop={theme.spacing(8)}
          >
              {text2}
          </Typography>
        </Box>
      </Box>
    </MuiModal>
  )
}

export default Modal
