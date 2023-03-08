import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import Button from "@mui/material/Button";
import CreateOrderModal from './CreateOrderModal'
import DeleteOrderModal from './DeleteOrderModal'
import './Orders.css'

const Orders = (props) => {
  return (
    <div>
   
      <div className="clients-table">
        <div className="header">
        <h1>Orders</h1>
           <CreateOrderModal /> 
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Payments</th>
              <th>Debt</th>
              <th>Created at</th>
              <th>Status</th>
              <th>Dates</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* {props.clients.map((client) => ( */}
              <tr >
                <td>1</td>
                <td>John</td>
                <td>cleaning</td>
                <td>120</td>
                <td>50</td>
                <td>70</td>
                <td>2023-03-08</td>
                <td>In progress</td>
                <td>2023-03-08</td>
                <td>
                  <div class="dropdown">
                    <Icon path={mdiMenu} size={1} />

                    <div class="dropdown-content">
                      <Button variant="outlined" sx={{ color: "red" }}>
                       <DeleteOrderModal/>
                      </Button>
                      {/* <EditClientModal updateClient={props.updateClient} client={client}/> */}
                    </div>
                  </div>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
