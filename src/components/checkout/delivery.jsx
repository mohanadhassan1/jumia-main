import React from 'react';

const DeliveryEstimate = () => {
    // Get the current date
    const currentDate = new Date();

    // Calculate the date 3 days from now
    const nextThreeDays = new Date();
    nextThreeDays.setDate(currentDate.getDate() + 3);

    // Format the dates
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    };

    // Format the current date and the date 3 days from now
    const formattedCurrentDate = formatDate(currentDate);
    const formattedNextThreeDays = formatDate(nextThreeDays);

    // Construct the delivery estimate message
    const deliveryEstimate = `Delivery between ${formattedCurrentDate} and ${formattedNextThreeDays}`;

    return (
        <p>{deliveryEstimate}</p>
    );
};

export default DeliveryEstimate;
