// imports for CSS Baseline from Material-UI
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

// import components and containing box
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyContacts from "./components/MyContacts";
import AddContact from "./components/AddContact";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { basePalette, PaletteType } from "./utilities/ColorPalettes";

function App() {
	// state to keep track of which page is rendered
	const [page, setPage] = React.useState("My Contacts");

	// state varaible for current color palette
	const [palette, setPalette] = React.useState<PaletteType>(basePalette);

	return (
		//React.Fragment groups multiple children without adding extra nodes to DOM
		<React.Fragment>
			{/* CSS Baseline provides extra styling presets to improve MUI compatibility */}
			<CssBaseline />
			<Navbar setPage={setPage} palette={palette} />
			<Box sx={{ m: 2, bgcolor: "white" }}>
				{page === "Home" ? <Home setPalette={setPalette} /> : ""}
				{page === "My Contacts" ? (
					<MyContacts setPage={setPage} palette={palette} />
				) : (
					""
				)}
				{page === "Sign In" ? <SignIn setPage={setPage} /> : ""}
				{page === "Sign Up" ? <SignUp setPage={setPage} /> : ""}
				{page === "Add Contact" ? <AddContact setPage={setPage} /> : ""}
			</Box>
		</React.Fragment>
	);
}

export default App;
