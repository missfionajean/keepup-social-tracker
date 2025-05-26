// imports for Material-UI components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ContactDetailProps {
	contact: {
		fullName: string;
		lastContact: string;
		frequency: string;
	};
    index: number;
	setShowEdit: (showEdit: boolean) => void;
	displayedContacts: { fullName: string; lastContact: string; frequency: string }[];
	setDisplayedContacts: (contacts: { fullName: string; lastContact: string; frequency: string }[]) => void;
    setSelectedCard: (index: number) => void;
}

function ContactDetail({ contact, index, setShowEdit, displayedContacts, setDisplayedContacts, setSelectedCard }: ContactDetailProps) {

    // function to update the contact date to today's date
    const updateContact = (index: number) => {
		const updatedContacts = [...displayedContacts];
		updatedContacts[index] = {
			fullName: contact.fullName,
			lastContact: new Date().toISOString().split("T")[0],
			frequency: contact.frequency,
		};
		setDisplayedContacts(updatedContacts);
        setSelectedCard(-1);
	}

	return (
		<div>
			<p>Last Contact: {contact.lastContact}</p>
			<p>Frequency: {contact.frequency}</p>
			<Stack spacing={2} direction="row">
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
