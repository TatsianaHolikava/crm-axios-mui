import React from 'react';
import './Clients.css'
import Icon from "@mdi/react";
import { mdiMenu } from '@mdi/js';
import Button from "@mui/material/Button";
import EditClientModal from './EditClientModal'
import CreateClientModal from './CreateClientModal'


const Clients = (props) => {
    return (
        <div className="clients-table">
        <div className="header">
          <h1>Clients</h1>
          <CreateClientModal createClient={props.createClient} clients={props.clients}/>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Create At</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {props.clients.map((client) => (
              <tr key={client._id}>
                <td>{client.name}</td>
                <td>{client.address}</td>
                <td>{client.phoneNumber}</td>
                <td>{client.createAt}</td>
                <td>
                  <div class="dropdown">
                  <Icon path={mdiMenu} size={1} />
  
                    <div class="dropdown-content">
                      <Button variant="outlined" sx={{ color: "red" }} onClick={() => props.deleteClient(client._id)}>
                        Del
                      </Button>
                      <EditClientModal updateClient={props.updateClient} client={client}/>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Clients;