import React from 'react';
import { ThemeProvider, Button as MuiButton } from '@material-ui/core';
import { theme } from "../theme/theme";

function Button({variant, color, size, text, ...rest }) {

  return (
    <ThemeProvider theme={theme}>
      <MuiButton 
        variant={variant || "contained"}
        size={size || "small"}
        color={color || "secondary"} 
        {...rest}
      >
        {text}
      </MuiButton>
    </ThemeProvider>
  )
}

export default Button;