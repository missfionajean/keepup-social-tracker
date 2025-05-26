import React from "react";
import {
	FormControl,
	Input,
	InputLabel,
	Button,
	NativeSelect,
} from "@mui/material";

// type declaration for MyContacts props
interface EditContactProps {
	contact: {
		fullName: string;
		lastContact: string;
		frequency: string;
	};
	index: number;
	setShowEdit: (showEdit: boolean) => void;
	displayedContacts: {
		fullName: string;
		lastContact: string;
		frequency: string;
	}[];
	setDisplayedContacts: (
		contacts: { fullName: string; lastContact: string; frequency: string }[]
	) => void;
}

function EditContact({
	contact,
	index,
	setShowEdit,
	displayedContacts,
	setDisplayedContacts,
}: EditContactProps) {
	// function to update the contact date to today's date
	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
		index: number
	) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const updatedContacts = [...displayedContacts];
		updatedContacts[index] = {
			fullName: formData.get("fullName") as string,
			lastContact: formData.get("lastContact") as string,
			frequency: formData.get("frequency") as string,
		};
		setDisplayedContacts(updatedContacts);
		setShowEdit(false);
	};

	return (
		<form
			onSubmit={(e) => handleSubmit(e, index)}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1.5rem",
				padding: "0.5rem",
				borderRadius: "8px",
			}}
		>
			<FormControl required>
				<InputLabel>Name</InputLabel>
				<Input
					type="text"
					name="fullName"
					defaultValue={contact.fullName}
					onClick={(e) => e.stopPropagation()}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				/>
			</FormControl>
			<FormControl required>
				<InputLabel>Last Contact</InputLabel>
				<Input
					type="date"
					name="lastContact"
					defaultValue={contact.lastContact}
					onClick={(e) => e.stopPropagation()}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				/>
			</FormControl>
			<FormControl required>
				<InputLabel>Frequency</InputLabel>
				<NativeSelect
                    name="frequency"
					defaultValue={contact.frequency}
					onClick={(e) => e.stopPropagation()}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				>
					<option value={"Daily"}>Daily</option>
					<option value={"Weekly"}>Weekly</option>
					<option value={"Monthly"}>Monthly</option>
					<option value={"Quarterly"}>Quarterly</option>
					<option value={"Biannually"}>Biannually</option>
					<option value={"Annually"}>Annually</option>
				</NativeSelect>
			</FormControl>
			<Button
				type="submit"
				variant="contained"
				sx={{
					backgroundColor: "gray",
				}}
				onClick={(e) => e.stopPropagation()}
				onMouseDown={(e) => e.stopPropagation()}
				onTouchStart={(e) => e.stopPropagation()}
				onTouchEnd={(e) => e.stopPropagation()}
			>
				Submit
			</Button>
		</form>
	);
}

export default EditContact;
