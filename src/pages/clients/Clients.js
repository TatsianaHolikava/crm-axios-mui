import React from 'react';
import './Clients.css'
import Icon from "@mdi/react";
import { mdiMenu } from '@mdi/js';
import Button from "@mui/material/Button";

const Clients = (props) => {
    return (
        <div className="services-table">
        <div className="header">
          <h1>Clients</h1>
          {/* <CreateJobModal createService={props.createService} services={props.services}/> */}
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
                <td>{client.phomeNumber}</td>
                <td>{client.createAt}</td>
                <td>
                  <div class="dropdown">
                  <Icon path={mdiMenu} size={1} />
  
                    <div class="dropdown-content">
                      <Button variant="outlined" sx={{ color: "red" }} onClick={() => props.deleteClient(client._id)}>
                        Del
                      </Button>
                      {/* <EditJobModal updateService={props.updateService} service={service}/> */}
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