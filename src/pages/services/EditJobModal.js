import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './ModalWindow.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditJobModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [updatedJob, setUpdatedJob] = useState(props.service.job)
  const [updatedPrice, setUpdatedPrice] = useState(props.service.price)
  const [updatedPrimeCost, setUpdatedPrimeCost] = useState(props.service.primeCost)
  const [updatedEmployee, setUpdatedEmployee] = useState(props.service.employee)

  
  const editJob = (event) => {
    event.preventDefault();
    const jobObj = {
      job: updatedJob,
      employee: updatedEmployee,
      price: updatedPrice,
      primeCost: updatedPrimeCost
    };
    props.updateService(props.service._id, jobObj);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit service
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Job:"
              variant="outlined"
              value={updatedJob}
              onChange={(e) => setUpdatedJob(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Employee:"
              variant="outlined"
              value={updatedEmployee}
              onChange={(e) => setUpdatedEmployee(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Price:"
              variant="outlined"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Price cost:"
              variant="outlined"
              value={updatedPrimeCost}
              onChange={(e) => setUpdatedPrimeCost(e.target.value)}
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
            <Button variant="contained" type="submit" onClick={editJob}>
              Save changes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}