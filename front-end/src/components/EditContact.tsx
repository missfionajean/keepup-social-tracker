import { FormControl, Input, InputLabel, Button } from "@mui/material";

// type declaration for MyContacts props
interface EditContactProps {
	contact: {
		fullName: string;
		lastContact: string;
		frequency: string;
		priority: string;
	};
	setShowEdit: (showEdit: boolean) => void;
}

function EditContact({ contact, setShowEdit }: EditContactProps) {
	// function to handle form submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// get the form data
		const formData = new FormData(e.currentTarget);
		// update the contact object with the new values
		contact.fullName = formData.get("fullName") as string;
		contact.lastContact = formData.get("lastContact") as string;
		contact.frequency = formData.get("frequency") as string;
		// close the edit form
		setShowEdit(false);
	};

	return (
		<form
			onSubmit={handleSubmit}
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
					defaultValue={contact.fullName}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				/>
			</FormControl>
			<FormControl required>
				<InputLabel>Last Contact</InputLabel>
				<Input
					type="date"
					defaultValue={contact.lastContact}
					onClick={(e) => e.stopPropagation()}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				/>
			</FormControl>
			<FormControl required>
				<InputLabel>Frequency</InputLabel>
				<Input
					type="text"
					defaultValue={contact.frequency}
					onClick={(e) => e.stopPropagation()}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				/>
			</FormControl>
			<Button
				type="submit"
				variant="contained"
				sx={{
					backgroundColor: "gray",
				}}
			>
				Submit
			</Button>
		</form>
	);
}

export default EditContact;
