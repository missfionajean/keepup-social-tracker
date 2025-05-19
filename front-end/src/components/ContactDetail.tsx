// imports for Material-UI components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ContactDetailProps {
	contact: {
		fullName: string;
		lastContact: string;
		frequency: string;
		priority: string;
	};
	setShowEdit: (showEdit: boolean) => void;
}

function ContactDetail({ contact, setShowEdit }: ContactDetailProps) {
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
				>
					Edit
				</Button>
				<Button
					sx={{
						backgroundColor: "gray",
					}}
					variant="contained"
				>
					Update
				</Button>
			</Stack>
		</div>
	);
}

export default ContactDetail;
