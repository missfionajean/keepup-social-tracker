// imports React and ReactDOM for rendering components
import React from "react";

//
import { DateTime } from "luxon";

// imports for custom components
import EditContact from "./EditContact";
import ContactDetail from "./ContactDetail";

// imports for Material-UI components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { CardContent } from "@mui/material";

// type declaration for MyContacts props
interface MyContactsProps {
	setPage: (page: string) => void;
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
		priority: "low",
	},
	{
		fullName: "Jane Smith",
		lastContact: "2023-09-15",
		frequency: "monthly",
		priority: "medium",
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
		priority: "high",
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
	},
];

function MyContacts({ setPage, palette }: MyContactsProps) {
	// state variable to filter the contact list
	const [filterText, setFliteredText] = React.useState("");

	// state variable to display or hide edit form
	const [showEdit, setShowEdit] = React.useState(false);

	// state variable to keep track of which card is selected
	const [selectedCard, setSelectedCard] = React.useState(-1);

	// function to handle card click event
	function handleCardClick(index: number) {
		setSelectedCard((prevIndex) => (prevIndex === index ? -1 : index));
		if (showEdit) {
			setShowEdit(false);
		}
	}

	// creates date object for current date
	const currentDate = new Date();

	// function to calculate the difference in days between two dates
	function dateDiffLuxon(date1: Date, date2: Date): { days: number } {
		const previousDate = DateTime.fromJSDate(date1);
		const newDate = DateTime.fromJSDate(date2);
		const diffInDays = Math.abs(previousDate.diff(newDate, "days").days);
		return {
			days: diffInDays,
		};
	}

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
				<Stack
					spacing={2}
					direction="row"
					sx={{
						width: "95%",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Button
						sx={{ backgroundColor: "gray" }}
						variant="contained"
					>
						Sort
					</Button>
					<TextField
						id="outlined-basic"
						label="Search"
						variant="outlined"
						value={filterText}
						onChange={(e) => setFliteredText(e.target.value)}
					/>
					<Button
						sx={{ backgroundColor: "gray" }}
						variant="contained"
						onClick={() => setPage("Add Contact")}
					>
						Add Contact
					</Button>
				</Stack>

				<Divider sx={{ margin: "10px 0", width: "95%" }} />

				<Stack spacing={2} direction="column">
					{sampleData
						.filter((contact) =>
							contact.fullName
								.toLowerCase()
								.includes(filterText.toLowerCase())
						)
						.map((contact, index) => (
							<div key={index}>
								<Card
									sx={{
										backgroundColor:
											palette[
												contact.priority as keyof PaletteType
											],
										width: "95%",
									}}
								>
									<CardActionArea
										onClick={() => handleCardClick(index)}
										data-active={
											selectedCard === index
												? ""
												: undefined
										}
										sx={{
											height: "100%",
											"&[data-active]": {
												"&:hover": {
													backgroundColor:
														"action.selectedHover",
												},
											},
										}}
									>
										<CardContent sx={{ height: "100%" }}>
											{showEdit &&
											selectedCard === index ? (
												<EditContact
													contact={contact}
													setShowEdit={setShowEdit}
												/>
											) : (
												<>
													<h3>{contact.fullName}</h3>
													{selectedCard === index ? (
														<ContactDetail
															contact={contact}
															setShowEdit={
																setShowEdit
															}
														/>
													) : (
														""
													)}
												</>
											)}
										</CardContent>
									</CardActionArea>
								</Card>
							</div>
						))}
				</Stack>
			</section>
		</>
	);
}

export default MyContacts;
