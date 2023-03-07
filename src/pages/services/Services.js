import "./Services.css";
import Icon from "@mdi/react";
import { mdiMenuOpen } from "@mdi/js";
import Button from "@mui/material/Button";
import EditJobModal from "./EditJobModal";
import CreateJobModal from "./CreateJobModal";

const Services = (props) => {
  console.log(props.jobs);
  return (
    <div className="services-table">
      <div className="header">
        <h1>Services</h1>
        <CreateJobModal />
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
          {props.jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.service.job}</td>
              <td>{job.service.employee}</td>
              <td>{job.service.price}</td>
              <td>{job.service.primeCost}</td>
              <td>
                <div class="dropdown">
                  <Icon path={mdiMenuOpen} size={1} />

                  <div class="dropdown-content">
                    <Button variant="outlined" sx={{ color: "red" }}>
                      Del
                    </Button>
                    <EditJobModal />
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
