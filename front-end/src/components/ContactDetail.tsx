// imports for Material-UI components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface ContactDetailProps {
	contact: {
		fullName: string;
		lastContact: string;
		frequency: string;
		notes: string;
	};
	index: number;
	setShowEdit: (showEdit: boolean) => void;
	displayedContacts: {
		fullName: string;
		lastContact: string;
		frequency: string;
        notes: string;
	}[];
	setDisplayedContacts: (
		contacts: { fullName: string; lastContact: string; frequency: string, notes: string }[]
	) => void;
	setSelectedCard: (index: number) => void;
}

function ContactDetail({
	contact,
	index,
	setShowEdit,
	displayedContacts,
	setDisplayedContacts,
	setSelectedCard,
}: ContactDetailProps) {
	// function to update the contact date to today's date
	const updateContact = (index: number) => {
		const updatedContacts = [...displayedContacts];
		updatedContacts[index] = {
			fullName: contact.fullName,
			lastContact: new Date().toISOString().split("T")[0],
			frequency: contact.frequency,
			notes: contact.notes,
		};
		setDisplayedContacts(updatedContacts);
		setSelectedCard(-1);
	};

	return (
		<div>
			<Box sx={{ whiteSpace: "pre-wrap" }}>
				<h4>Last Contact:</h4>
				<p>{contact.lastContact}</p>
				<h4>Frequency:</h4>
				<p>{contact.frequency}</p>
				<h4>Notes:</h4>
				<p aria-multiline>{contact.notes}</p>
			</Box>
			<Stack
				spacing={2}
				direction="row"
				sx={{
					marginTop: "25px",
				}}
			>
				<Button
					sx={{
						backgroundColor: "gray",
						marginRight: "10px",
					}}
					variant="contained"
					onClick={(e) => {
						e.stopPropagation();
						setShowEdit(true);
					}}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				>
					Edit
				</Button>
				<Button
					sx={{
						backgroundColor: "gray",
					}}
					variant="contained"
					onClick={(e) => {
						e.stopPropagation();
						updateContact(index);
					}}
					onMouseDown={(e) => e.stopPropagation()}
					onTouchStart={(e) => e.stopPropagation()}
					onTouchEnd={(e) => e.stopPropagation()}
				>
					Contacted
				</Button>
			</Stack>
		</div>
	);
}

export default ContactDetail;
