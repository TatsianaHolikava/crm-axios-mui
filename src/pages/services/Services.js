import "./Services.css";
import Icon from "@mdi/react";
import { mdiMenu } from '@mdi/js';
import Button from "@mui/material/Button";
import EditJobModal from "./EditJobModal";
import CreateJobModal from "./CreateJobModal";


const Services = (props) => {

  return (
    <div className="services-table">
      <div className="header">
        <h1>Services</h1>
        <CreateJobModal createService={props.createService} services={props.services}/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Job</th>
            <th>Employee</th>
            <th>Price</th>
            <th>Prime Cost</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.services.map((service) => (
            <tr key={service._id}>
              <td>{service.job}</td>
              <td>{service.employee}</td>
              <td>{service.price}</td>
              <td>{service.primeCost}</td>
              <td>
                <div class="dropdown">
                <Icon path={mdiMenu} size={1} />

                  <div class="dropdown-content">
                    <Button variant="outlined" sx={{ color: "red" }} onClick={() => props.deleteService(service._id)}>
                      Del
                    </Button>
                    <EditJobModal updateService={props.updateService} service={service}/>
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

export default Services;
