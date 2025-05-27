function sortContacts(contacts: { fullName: string; lastContact: string; frequency: string; priority: string }[]) {
    
    // custom priority order for sorting contacts
    const priorityOrder: Record<string, number> = {
        error: 0,
        urgent: 1,
        high: 2,
        medium: 3,
        low: 4,
        none: 5,
    };

    // sort contacts based on priority using the custom order
    contacts.sort((a, b) => {
        return priorityOrder[a.priority as keyof typeof priorityOrder ?? "error"] - priorityOrder[b.priority as keyof typeof priorityOrder ?? "error"];
    });
}

export default sortContacts;