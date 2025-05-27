// imports React and ReactDOM for rendering components
import React, { useEffect } from "react";

// imports priority and sorting logic
import getPriority from "../utilities/GetPriority";
import sortContacts from "../utilities/SortContacts";

// imports for custom components
import EditContact from "./EditContact";
import ContactDetail from "./ContactDetail";
import SortButton from "./SortButton";

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
	error: string;
}

// sample data for testing component
const sampleData = [
	{
		fullName: "John Doe",
		lastContact: "2025-05-21",
		frequency: "Daily",
	},
	{
		fullName: "Jane Smith",
		lastContact: "2025-03-13",
		frequency: "Monthly",
	},
	{
		fullName: "Alice Johnson",
		lastContact: "2024-01-20",
		frequency: "Annually",
	},
	{
		fullName: "Bob Brown",
		lastContact: "2025-03-01",
		frequency: "Quarterly",
	},
	{
		fullName: "Charlie Black",
		lastContact: "2025-02-07",
		frequency: "Monthly",
	},
	{
		fullName: "Diana White",
		lastContact: "2024-10-12",
		frequency: "Biannually",
	},
	{
		fullName: "Eve Green",
		lastContact: "2025-05-21",
		frequency: "Weekly",
	},
	{
		fullName: "Frank Blue",
		lastContact: "2025-05-19",
		frequency: "Daily",
	},
	{
		fullName: "Grace Yellow",
		lastContact: "2024-01-05",
		frequency: "Annually",
	},
	{
		fullName: "Hank Red",
		lastContact: "2025-05-22",
		frequency: "Yearly",
	},
];

function MyContacts({ setPage, palette }: MyContactsProps) {
	// state variable to filter the contact list
	const [filterText, setFliteredText] = React.useState("");

	// state variable to display or hide edit form
	const [showEdit, setShowEdit] = React.useState(false);

	// state variable for contacts object
	const [displayedContacts, setDisplayedContacts] =
		React.useState<
			{ fullName: string; lastContact: string; frequency: string }[]
		>(sampleData);

	// state variable to hold sorting method
	const [sortMethod, setSortMethod] = React.useState("Priority");

	// initialize and order contacts, runs again when displayedContacts changes
	useEffect(() => {
		// map through contacts array to add priority to each entry
		const prioritizedContacts = displayedContacts.map((contact) => ({
			...contact,
			priority: getPriority(new Date(), contact) || "error",
		}));
		sortContacts(prioritizedContacts, sortMethod);
		setDisplayedContacts(prioritizedContacts);
	}, [displayedContacts, sortMethod]);

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
					<SortButton setSortMethod={setSortMethod}/>
					<TextField
						id="outlined-basic"
						label="Search"
						variant="outlined"
						value={filterText}
						onChange={(e) => setFliteredText(e.target.value)}
					/>
					<Button
						sx={{ backgroundColor: "gray", height: "3.8em" }}
						variant="contained"
						onClick={() => setPage("Add Contact")}
					>
						Add
					</Button>
				</Stack>

				<Divider sx={{ margin: "10px 0", width: "95%" }} />

				<Stack spacing={2} direction="column">
					{displayedContacts
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
												getPriority(
													currentDate,
													contact
												) ?? "error"
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
													index={index}
													setShowEdit={setShowEdit}
													displayedContacts={
														displayedContacts
													}
													setDisplayedContacts={
														setDisplayedContacts
													}
												/>
											) : (
												<>
													<h3>{contact.fullName}</h3>
													{selectedCard === index ? (
														<ContactDetail
															contact={contact}
															index={index}
															setShowEdit={
																setShowEdit
															}
															displayedContacts={
																displayedContacts
															}
															setDisplayedContacts={
																setDisplayedContacts
															}
															setSelectedCard={
																setSelectedCard
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
