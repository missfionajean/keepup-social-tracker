import React from "react";
import {
	FormControl,
	Input,
	InputLabel,
	Button,
	NativeSelect,
} from "@mui/material";

// type declaration for MyContacts props
interface Contact {
	fullName: string;
	lastContact: string;
	frequency: string;
	notes: string;
}

interface EditContactProps {
	contact: Contact;
	index: number;
	setShowEdit: (showEdit: boolean) => void;
	displayedContacts: Contact[];
	setDisplayedContacts: (contacts: Contact[]) => void;
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
			// if notes are not provided, default to an empty string
			notes: (formData.get("notes") as string) || "",
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
			onKeyDown={(e) => {
				// Prevent form submission on Enter key press in notes field
				if (e.key === "Escape") {
					// Close the edit form on Escape key press
					setShowEdit(false);
				} else if (e.key === "Tab") {
					// Allow tabbing through the form fields
					e.stopPropagation();
				}
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
			<FormControl>
				<InputLabel>Notes</InputLabel>
				<Input
					type="text"
					multiline
					name="notes"
					defaultValue={contact.notes}
					onClick={(e) => e.stopPropagation()}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
					onKeyDown={(e) => {
						// Prevent form submission on Enter key press in notes field
						if (e.key === " ") {
							// Allow space key to be handled if needed
							e.stopPropagation();
							e.preventDefault();
							const input = e.target as HTMLInputElement;
							const start = input.selectionStart || 0;
							const end = input.selectionEnd || 0;
							const value = input.value;
							input.value =
								value.slice(0, start) + " " + value.slice(end);
							input.selectionStart = input.selectionEnd =
								start + 1;
						}
					}}
				/>
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
