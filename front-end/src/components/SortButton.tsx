import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface SortButtonProps {
	setSortMethod: (method: string) => void;
}

function SortButton({ setSortMethod }: SortButtonProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				id="sort-button"
				sx={{ backgroundColor: "gray", height: "3.8em" }}
				variant="contained"
				aria-controls={open ? "sort-menu" : undefined}
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
				<MenuItem
					onClick={() => {
						handleClose();
						setSortMethod("Priority");
					}}
				>
					Priority
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						setSortMethod("Reverse Priority");
					}}
				>
					Reverse Priority
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						setSortMethod("Alphabetical");
					}}
				>
					Alphabetical
				</MenuItem>
				<MenuItem
					onClick={() => {
						handleClose();
						setSortMethod("Contact Frequency");
					}}
				>
					Contact Frequency
				</MenuItem>
			</Menu>
		</>
	);
}

export default SortButton;
