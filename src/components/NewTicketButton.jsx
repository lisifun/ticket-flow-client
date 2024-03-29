import React from "react";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
const NewTicketButton = ({ showModal, setShowModal }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Button
        variant="primary"
        className="new-ticket-button"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="rgb(238, 239, 252)"
          role="img"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M4.75 1.99995C2.67893 1.99995 1 3.67888 1 5.74995V11.2499C1 13.321 2.67893 14.9999 4.75 14.9999H10.2501C12.3212 14.9999 14.0001 13.321 14.0001 11.2499V7.99995C14.0001 7.58574 13.6643 7.24995 13.2501 7.24995C12.8359 7.24995 12.5001 7.58574 12.5001 7.99995V11.2499C12.5001 12.4926 11.4927 13.4999 10.2501 13.4999H4.75C3.50736 13.4999 2.5 12.4926 2.5 11.2499V5.74995C2.5 4.50731 3.50736 3.49995 4.75 3.49995H7C7.41421 3.49995 7.75 3.16416 7.75 2.74995C7.75 2.33574 7.41421 1.99995 7 1.99995H4.75Z"></path>
          <path d="M13.4559 1.45667C13.2663 1.39344 13.0571 1.44281 12.9158 1.58419L11.7803 2.71962L13.1945 4.13383L14.33 2.9984C14.4714 2.85702 14.5207 2.6479 14.4575 2.45822C14.2999 1.98535 13.9288 1.61429 13.4559 1.45667Z"></path>
          <path d="M12.1339 5.19449L10.7197 3.78028L6.52811 7.97184C5.77184 8.72811 5.25634 9.69132 5.04659 10.7401C5.03143 10.8159 5.09827 10.8827 5.17408 10.8676C6.22284 10.6578 7.18605 10.1423 7.94232 9.38606L12.1339 5.19449Z"></path>
        </svg>
        <div style={{ width: "auto" }}>New ticket</div>
      </Button>
      <Button className="search-button">
        <i className="fas fa-search"></i>
      </Button>
    </div>
  );
};

export default NewTicketButton;
