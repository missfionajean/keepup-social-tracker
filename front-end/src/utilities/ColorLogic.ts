import { DateTime } from "luxon";

// function to calculate the difference in days between two dates
function dateDifference(date1: Date, date2: Date): { days: number } {
	const previousDate = DateTime.fromJSDate(date1);
	const newDate = DateTime.fromJSDate(date2);
	const differenceInDays = Math.abs(previousDate.diff(newDate, "days").days);
	return {
		days: differenceInDays,
	};
}

// function to get the priority of the contact based on the last contact date
function getPriority(
	currentDate: Date,
	contact: { lastContact: string; frequency: string }
) {
	const lastContactDate = new Date(contact.lastContact);
	const daysSinceLastContact = dateDifference(
		currentDate,
		lastContactDate
	).days;

	if (contact.frequency === "Daily") {
		// return priority based on number of days since last contact
		if (daysSinceLastContact >= 6) {
			return "urgent";
		} else if (daysSinceLastContact >= 4) {
			return "high";
		} else if (daysSinceLastContact >= 2) {
			return "medium";
		} else if (daysSinceLastContact >= 1) {
			return "low";
		} else {
			return "none";
		}
	}

	if (contact.frequency === "Weekly") {
		// return priority based on number of days since last contact
		if (daysSinceLastContact >= 21) {
			return "urgent";
		} else if (daysSinceLastContact >= 14) {
			return "high";
		} else if (daysSinceLastContact >= 10) {
			return "medium";
		} else if (daysSinceLastContact >= 7) {
			return "low";
		} else {
			return "none";
		}
	}

	if (contact.frequency === "Monthly") {
		// return priority based on number of days since last contact
		if (daysSinceLastContact >= 90) {
			return "urgent";
		} else if (daysSinceLastContact >= 60) {
			return "high";
		} else if (daysSinceLastContact >= 45) {
			return "medium";
		} else if (daysSinceLastContact >= 30) {
			return "low";
		} else {
			return "none";
		}
	}

	if (contact.frequency === "Quarterly") {
		// return priority based on number of days since last contact
		if (daysSinceLastContact >= 180) {
			return "urgent";
		} else if (daysSinceLastContact >= 150) {
			return "high";
		} else if (daysSinceLastContact >= 120) {
			return "medium";
		} else if (daysSinceLastContact >= 90) {
			return "low";
		} else {
			return "none";
		}
	}

	if (contact.frequency === "Biannually") {
		// return priority based on number of days since last contact
		if (daysSinceLastContact >= 360) {
			return "urgent";
		} else if (daysSinceLastContact >= 300) {
			return "high";
		} else if (daysSinceLastContact >= 240) {
			return "medium";
		} else if (daysSinceLastContact >= 180) {
			return "low";
		} else {
			return "none";
		}
	}

	if (contact.frequency === "Annually") {
		// return priority based on number of days since last contact
		if (daysSinceLastContact >= 600) {
			return "urgent";
		} else if (daysSinceLastContact >= 510) {
			return "high";
		} else if (daysSinceLastContact >= 450) {
			return "medium";
		} else if (daysSinceLastContact >= 365) {
			return "low";
		} else {
			return "none";
		}
	}
}

export { getPriority, dateDifference };
