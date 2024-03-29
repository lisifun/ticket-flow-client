import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../services/SERVER_URL";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Sidebar from "../components/Sidebar";
import TicketDetails from "../components/TicketDetails";
import MoreTicketDetails from "../components/MoreTicketDetails";

const TicketDetailsPage = () => {
  const { workspaceId } = useParams();
  const { ticketId } = useParams();

  console.log("line 14 => TicketDetailsPage", ticketId);
  const { user, logOutUser } = useContext(AuthContext);

  const [allWorkspaces, setAllWorkspaces] = useState([]);
  const [currentWorkspace, setCurrentWorkspace] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [editedTicket, setEditedTicket] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces`)
      .then((response) => {
        setAllWorkspaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces/${workspaceId}`)
      .then((response) => {
        setCurrentWorkspace(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/tickets/${workspaceId}`)
      .then((response) => {
        setAllTickets(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`)
      .then((response) => {
        setSelectedTicket(response.data);
        setEditedTicket(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateTicket = (editedTicket) => {
    axios
      .put(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`, editedTicket)
      .then((response) => {
        const udpdatedTickets = allTickets.map((ticket) => {
          return ticket._id === editedTicket._id ? response.data : ticket;
        });

        setAllTickets(udpdatedTickets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTicket = (ticketId) => {
    axios
      .delete(`${SERVER_URL}/tickets/${workspaceId}/${ticketId}`)
      .then((response) => {
        setAllTickets(
          allTickets.filter((ticket) => {
            return ticket._id !== ticketId;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ticket-details-page">
      {selectedTicket && (
        <div className="details-page" style={{ display: "flex" }}>
          <Sidebar
            allWorkspaces={allWorkspaces}
            allTickets={allTickets}
            setAllTickets={setAllTickets}
            currentWorkspace={currentWorkspace}
            user={user}
            logOutUser={logOutUser}
          />

          {/* <Sidebar
            setFilteredTickets={setFilteredTickets}
            allTickets={allTickets}
            setAllTickets={setAllTickets}
            allWorkspaces={allWorkspaces}
            currentWorkspace={currentWorkspace}
            showModal={showModal}
            setShowModal={setShowModal}
            user={user}
            logOutUser={logOutUser}
            addNewTicket={addNewTicket}
          /> */}

          <TicketDetails
            selectedTicket={selectedTicket}
            editedTicket={editedTicket}
            setEditedTicket={setEditedTicket}
            onChange={updateTicket}
            onDelete={deleteTicket}
          />
          <MoreTicketDetails
            selectedTicket={selectedTicket}
            editedTicket={editedTicket}
            setEditedTicket={setEditedTicket}
            onChange={updateTicket}
            currentWorkspace={currentWorkspace}
          />
        </div>
      )}
    </div>
  );
};

export default TicketDetailsPage;
