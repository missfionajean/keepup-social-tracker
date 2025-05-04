import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// type declaration for NavbarProps
interface MyContactsProps {
    palette: PaletteType;
}

interface PaletteType {
	none: string;
    low: string;
    medium: string;
    high: string;
    urgent: string;
}

// sample data for testing component
const sampleData = [
	{
		fullName: "John Doe",
		lastContact: "2023-10-01",
		frequency: "weekly",
        priority: "high",
	},
	{
		fullName: "Jane Smith",
		lastContact: "2023-09-15",
		frequency: "monthly",
        priority: "urgent",
	},
	{
		fullName: "Alice Johnson",
		lastContact: "2023-08-20",
		frequency: "yearly",
        priority: "medium",
	},
	{
		fullName: "Bob Brown",
		lastContact: "2023-10-05",
		frequency: "weekly",
        priority: "low",
	},
    {
        fullName: "Charlie Black",
        lastContact: "2023-09-10",
        frequency: "monthly",
        priority: "none",
    },
    {
        fullName: "Diana White",
        lastContact: "2023-08-25",
        frequency: "yearly",
        priority: "high",
    },
    {
        fullName: "Eve Green",
        lastContact: "2023-10-02",
        frequency: "weekly",
        priority: "urgent",
    },
    {
        fullName: "Frank Blue",
        lastContact: "2023-09-12",
        frequency: "monthly",
        priority: "medium",
    },
    {
        fullName: "Grace Yellow",
        lastContact: "2023-08-30",
        frequency: "yearly",
        priority: "low",
    },
    {
        fullName: "Hank Red",
        lastContact: "2023-10-03",
        frequency: "weekly",
        priority: "none",
    }
];

function MyContacts({ palette }: MyContactsProps) {
	return (
		<>
			<h1>MyContacts</h1>
			<p>
				This will be the component that holds the main function of the
				app, the list of names with color-coding. There will be quick
				update, edit (we are only interested in storing the most recent
				contact for MVP), colored tiles, and add contact.
			</p>
			<p>
				Stretch goals will be sorting function, grouped contacts, stored
				contact info (to be used for cross-app functionality later), and
				settings page for palette swap, etc.
			</p>

			<section>
				<h2>Contact List</h2>
				<p>
					This is where the contact list will be displayed. It will be
					a list of names with color-coding based on the last contact
					date.
				</p>
				<p>
					There will be a button to add a new contact, which will open
					a form to enter the contact's name and last contact date.
				</p>

				<Stack spacing={2} direction="column">
					{sampleData.map((contact, index) => (
						<div key={index}>
							<Button sx={{ backgroundColor: palette[contact.priority] }} variant="contained">
								{contact.fullName}
							</Button>
						</div>
					))}
				</Stack>
			</section>
		</>
	);
}

export default MyContacts;
