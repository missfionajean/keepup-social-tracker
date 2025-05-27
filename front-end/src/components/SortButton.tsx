import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function SortButton() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="sort-button"
				sx={{ backgroundColor: "gray" }}
				variant="contained"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Sort
			</Button>
			<Menu
				id="sort-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Priority</MenuItem>
				<MenuItem onClick={handleClose}>Reverse Priority</MenuItem>
				<MenuItem onClick={handleClose}>Alphabetical</MenuItem>
				<MenuItem onClick={handleClose}>Contact Frequency</MenuItem>
			</Menu>
		</div>
	);
}

export default SortButton;
