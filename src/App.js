import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./layout/Dashboard";
import { Container, Stack, Button, Grid } from "@mui/material";
import MuiAppBar from "./components/AppTopbar";
import { teal } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
