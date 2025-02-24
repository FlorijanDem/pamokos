import React, { useState, useEffect } from "react";

export default function Ticket() {
  const [ticketDetails, setTicketDetails] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await fetch("http://localhost:5006/users");
        if (!response.ok) {
          throw new Error("Failed to fetch ticket details");
        }
        const data = await response.json();
        setTicketDetails(data);
      } catch (error) {
        console.error("Error fetching ticket:", error);
      }
    };

    fetchTicket();
  }, []);

  if (!ticketDetails) {
    return <div>Loading ticket details...</div>;
  }

  const lastItem = ticketDetails.user.slice(-1)[0];
  console.log(lastItem)
  return (
    <div>
      <h1>Ticket Information</h1>
      <p><strong>Ticket ID:</strong> {lastItem.id}</p>
      <p><strong>Full Name:</strong> {lastItem.full_name}</p>
      <p><strong>Email:</strong> {lastItem.email}</p>
      <p><strong>GitHub Username:</strong> {lastItem.github_username}</p>
    </div>
  );
}

