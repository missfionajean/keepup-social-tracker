import * as React from 'react';

// imports for AppBar from MUI
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

// imports for sidebar (Drawer from MUI)
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

// imports for MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import { Toolbar } from '@mui/material';

// type declaration for NavbarProps
interface NavbarProps {
	// declaring setPage as a function with type string and it wont return anything (void)
	setPage: (page: string) => void;
}

function Navbar({ setPage }: NavbarProps) {
    // state manager for drawer visibility
    const [open, setOpen] = React.useState(false);

    // function to toggle drawer visibility
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        // Box is a layout component used to wrap other components
        <Box sx={{ width: 180 }} onClick={toggleDrawer(false)}>
        
            {/* Standard Navigation */}
            <List>
                {['Home', 'My Profile', 'Cal Test'].map((text, index) => (
                    <ListItem key={index} disablePadding onClick={() => setPage(text)}>
                        <ListItemButton>
                            {text}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* Horizontal Line */}
            <Divider />

            {/* Account Navigation */}
            <List>
                {['Sign In'].map((text, index) => (
                    <ListItem key={index} disablePadding onClick={() => setPage(text)}>
                        <ListItemButton>
                            {text}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

	return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ bgcolor: "lightseagreen" }}>
                <Toolbar>
                    <Button onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color: "white" }}/>
                    </Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <h3 onClick={() => setPage('Home')}>eMotion</h3>
                </Toolbar>
            </AppBar>
        </Box>
	);
}

export default Navbar;
