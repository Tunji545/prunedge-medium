import { React } from 'react';
import { Box, Typography, Modal as MuiModal, Paper } from "@material-ui/core";

function Modal({open, close, renderLogo, heading, text2, bg, children}) {

// const bg = false
  return (
    <Box>
      <MuiModal
        open={open}
        onClose={close}
      >
        <Box width={500} bgcolor={bg && "black"} component={!bg && Paper} >
          {renderLogo()}
          <Typography variant="h4">{heading}</Typography>
          <Typography variant="subtitle1">{text2}</Typography>
          {children}
        </Box>
      </MuiModal>
    </Box>
  )
}

export default Modal
