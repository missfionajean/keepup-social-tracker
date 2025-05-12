// type declaration for MyContacts props
interface AddContactProps {
	setPage: (page: string) => void;
}

function AddContact({ setPage }: AddContactProps) {
	return (
		<div>
			<h1>Add Contact</h1>
			<form>
				<label>
					Name
				</label>
                <input type="text" name="name" />
				<br />
				<label>
					Email
			    </label>
                <input type="email" name="email" />
				<br />
				<button type="submit">Add Contact</button>
				<button onClick={() => setPage("My Contacts")}>Back</button>
			</form>
		</div>
	);
}

export default AddContact;
