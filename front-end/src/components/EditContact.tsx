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
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setShowEdit(false);
			}}
		>
			<FormControl required>
				<InputLabel>Name</InputLabel>
				<Input
					type="text"
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
			<Button type="submit" variant="contained">
				Submit
			</Button>
		</form>
	);
}

export default EditContact;
