import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import CreateOrderModal from "./CreateOrderModal";
import DeleteOrderModal from "./DeleteOrderModal";
import EditOrderModal from "./EditOrderModal";
import "./Orders.css";
import { mdiCheckCircle } from "@mdi/js";

const Orders = (props) => {
  return (
    <div>
      <div className="clients-table">
        <div className="header">
          <h1>Orders</h1>
          <CreateOrderModal
            createOrder={props.createOrder}
            clients={props.clients}
            services={props.services}
          />
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
            {props.orders.map((order) => (
              <tr>
                <td>{order.orderNumber}</td>
                <td>{order.clientName}</td>
                <td>
                  {order.service.job}
                  <br />
                  <i>Employee: {order.service.employee} </i>
                </td>
                <td>{order.service.price}</td>
                <td>{order.paid.payment}</td>
                <td>{order.paid.debt}</td>

                <td>{order.service.createAt}</td>
                <td className="statuses">
                  <p className="status-todo">
                    Not started:{" "}
                    {order.sentToDo.status ? (
                      <Icon path={mdiCheckCircle} size={0.75} color="black" />
                    ) : null}
                  </p>
                  <p>
                    In progress:{" "}
                    {order.sentToDo.status ? (
                      <Icon path={mdiCheckCircle} size={0.75} color="red" />
                    ) : null}
                  </p>
                  <p>
                    Job completed:{" "}
                    {order.completed.status ? (
                      <Icon path={mdiCheckCircle} size={0.75} color="blue" />
                    ) : null}
                  </p>
                  <p>
                    Customer received:{" "}
                    {order.clientReceived.status ? (
                      <Icon path={mdiCheckCircle} size={0.75} color="green" />
                    ) : null}
                  </p>
                </td>
                <td className="dates">
                  <p>{order.service.createAt}</p>
                  <p>{order.sentToDo.date}</p>
                  <p>{order.completed.date}</p>
                  <p>{order.clientReceived.date}</p>
                </td>
                <td>
                  <div class="dropdown">
                    <Icon path={mdiMenu} size={1} />

                    <div class="dropdown-content">
                      <DeleteOrderModal
                        deleteOrder={props.deleteOrder}
                        order={order}
                      />
                      <EditOrderModal
                        updateOrder={props.updateorder}
                        order={order}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
