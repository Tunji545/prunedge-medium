import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#0050C8",
    },
    error: {
      main: "#FF0000"
    },
    info: {
      main: "#F7F8F9"
    },
    primary: {
      main: "#Fff"
    },
    success: {
      main: "#15692A"
    }
  },
  typography: {
    subtitle1: {
      fontFamily: 'Ubuntu',
      fontWeight: 500,
      lineHeight: "24px"
    },
    h2: {
      lineHeight: "78px",
      fontWeight: 700
    },
    h3: {
      fontFamily: "Ubuntu",
      fontWeight: 700,
      lineHeight: "49px",
      fontSize: "2.875rem"
    },
    h4: {
      fontFamily: "Ubuntu",
      fontWeight: 700,
      lineHeight: "43px",
      fontSize: "2rem",
      color: "black"
    },
    h5: {
      fontSize: "1.625rem",
      fontFamily: "Ubuntu",
      lineHeight: "43px",
      fontWeight: 700,
      color: "#393A4A"
    }
  },
});

theme.props = {

}

theme.overrides = {
    MuiTypography: {
      h3: {
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: "49px",
        fontFamily: "Ubuntu",
        color: "#fff"
      },
    },
    MuiInputBase: {
      root: {
        padding: "0, 8",
        borderRadius: 4,
        position: "relative",
        top: 8,
        marginRight: "40"
      }
    }
  }