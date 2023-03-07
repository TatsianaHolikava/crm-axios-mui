import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "./ModalWindow.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateJobModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newJob, setNewJob] = useState("");
  const [newEmployee, setNewEmployee] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newPrimeCost, setNewPrimeCost] = useState("");
 

  const addNewJob = () => {
    const jobObj = {
      job: newJob,
      employee: newEmployee,
      price: newPrice,
      primeCost: newPrimeCost
    };
    props.createService(jobObj);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Create Job
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new service
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Job:"
              variant="outlined"
              onChange={(e) => setNewJob(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Employee:"
              variant="outlined"
              onChange={(e) => setNewEmployee(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Price:"
              variant="outlined"
              onChange={(e) => setNewPrice(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Price cost:"
              variant="outlined"
              onChange={(e) => setNewPrimeCost(e.target.value)}
            />
          </Typography>
          <div className="actions">
            <Button
              className="cancel-btn"
              variant="outlined"
              sx={{
                backgroundColor: "red",
                color: "white",
                marginRight: "5px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={addNewJob}>
              Create service
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
