import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import ExploreCategory from "./Pages/ExploreCategory";
import LandingPage from "./Pages/LandingPage";
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "./theme/theme";

function App() {
  // return 'My page'
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/category" component={ExploreCategory} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
