import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import '../ModalWindow.css'

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

  const [updatedName, setUpdatedName] = useState(props.client.name)
  const [updatedAddress, setUpdatedAddress] = useState(props.client.address)
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(props.client.phoneNumber)
  const [updatedCreateAt, setUpdatedCreateAt] = useState(props.client.createAt)

  
  const editClient = (event) => {
    event.preventDefault();
    const clientObj = {
      name: updatedName,
      address: updatedAddress,
      phoneNumber: updatedPhoneNumber,
      createAt: updatedCreateAt,

    };
    props.updateClient(props.client._id, clientObj);
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
              label="Name:"
              variant="outlined"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Address:"
              variant="outlined"
              value={updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Phone Number:"
              variant="outlined"
              value={updatedPhoneNumber}
              onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              variant="outlined"
              value={updatedCreateAt}
              type="date"
              onChange={(e) => setUpdatedCreateAt(e.target.value)}
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
            <Button variant="contained" type="submit" onClick={editClient}>
              Save changes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}