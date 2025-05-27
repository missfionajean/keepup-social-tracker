function sortContacts(
	contacts: {
		fullName: string;
		lastContact: string;
		frequency: string;
		priority: string;
	}[],
	sortMethod: string
) {
	// custom priority order for sorting contacts
	const priorityOrder: Record<string, number> = {
		error: 0,
		urgent: 1,
		high: 2,
		medium: 3,
		low: 4,
		none: 5,
	};

	const frequencyOrder: Record<string, number> = {
		Daily: 0,
		Weekly: 1,
		Monthly: 2,
		Quarterly: 3,
		Biannually: 4,
		Annually: 5,
	};

	if (sortMethod === "Priority") {
		// sort contacts based on priority using the custom order
		contacts.sort((a, b) => {
			return (
				priorityOrder[
					(a.priority as keyof typeof priorityOrder) ?? "error"
				] -
				priorityOrder[
					(b.priority as keyof typeof priorityOrder) ?? "error"
				]
			);
		});
	} else if (sortMethod === "Reverse Priority") {
		// sort contacts based on reverse priority
		contacts.sort((a, b) => {
			return (
				priorityOrder[
					(b.priority as keyof typeof priorityOrder) ?? "error"
				] -
				priorityOrder[
					(a.priority as keyof typeof priorityOrder) ?? "error"
				]
			);
		});
	} else if (sortMethod === "Alphabetical") {
		// sort contacts alphabetically by full name
		contacts.sort((a, b) => {
			return a.fullName.localeCompare(b.fullName);
		});
	} else if (sortMethod === "Contact Frequency") {
		// sort contacts based on frequency
		contacts.sort((a, b) => {
			return (
				frequencyOrder[a.frequency as keyof typeof frequencyOrder] -
				frequencyOrder[b.frequency as keyof typeof frequencyOrder]
			);
		});
	} else {
		// sdefault to priority if an invalid sort method is provided
		contacts.sort((a, b) => {
			return (
				priorityOrder[
					(a.priority as keyof typeof priorityOrder) ?? "error"
				] -
				priorityOrder[
					(b.priority as keyof typeof priorityOrder) ?? "error"
				]
			);
		});
	}
}

export default sortContacts;
