export const handleSearch = (component, inputValue) => {
    return component?.filter(
        (customer) =>
            customer.name.toLowerCase().includes(inputValue) ||
            customer.username.toLowerCase().includes(inputValue) ||
            customer.email.toLowerCase().includes(inputValue) ||
            customer.contactNumber.toString().includes(inputValue)
    );
};

export const showDate = (date) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ];
    const d = new Date(date);
    return `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
};
