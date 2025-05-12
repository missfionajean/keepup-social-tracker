import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";

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
	},
];

function MyContacts({ setPage, palette }: MyContactsProps) {
    // state variable to keep track of which card is selected
	const [selectedCard, setSelectedCard] = React.useState(-1);

    // state variable to filter the contact list
    const [filterText, setFliteredText] = React.useState("");

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
					{sampleData.filter(contact => contact.fullName.toLowerCase().includes(filterText.toLowerCase())).map((contact, index) => (
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
									onClick={() => setSelectedCard(index)}
									data-active={
										selectedCard === index ? "" : undefined
									}
									sx={{
										height: "100%",
										"&[data-active]": {
											backgroundColor: "action.selected",
											"&:hover": {
												backgroundColor:
													"action.selectedHover",
											},
										},
									}}
								>
									<CardContent sx={{ height: "100%" }}>
										<h3>{contact.fullName}</h3>
										{selectedCard === index ? (
											<div>
												<p>
													Last Contact: {contact.lastContact}
												</p>
												<p>
													Frequency: {contact.frequency}
												</p>
												<Button
													sx={{ backgroundColor: "gray", marginRight: "10px" }}
													variant="contained"
												>
													Edit
												</Button>
                                                <Button
													sx={{ backgroundColor: "gray" }}
													variant="contained"
												>
													Update
												</Button>
											</div>
										) : (
											""
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
