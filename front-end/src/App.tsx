// imports for CSS Baseline from Material-UI
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

// imports for getting date for MUI calendar
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// import components and containing box
import Box from '@mui/material/Box';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CalTest from "./components/CalTest";

function App() {
	// state to keep track of which page is rendered
	const [page, setPage] = React.useState("Home");

	return (
        // LocalizationProvider grabs date from AdapterDayjs, which is a date adapter for MUI
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* React.Fragment groups multiple children without adding extra nodes to DOM */}
            <React.Fragment>
                {/* CSS Baseline provides extra styling presets to improve MUI compatibility */}
                <CssBaseline />
                <Navbar setPage={setPage} />
                <Box sx={{ m: 2 }}>
                    {page === "Home" ? <Home /> : ""}
                    {page === "My Profile" ? <MyProfile /> : ""}
                    {page === "Sign In" ? <SignIn setPage={setPage} /> : ""}
                    {page === "Sign Up" ? <SignUp setPage={setPage} /> : ""}
                    {page === "Cal Test" ? <CalTest /> : ""}
                </Box>
            </React.Fragment>
        </LocalizationProvider>
	);
}

export default App;
