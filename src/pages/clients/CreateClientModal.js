import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../ModalWindow.css";

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

export default function CreateClientModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newName, setNewName] = useState("")
  const [newAddress, setNewAddress] = useState("")
  const [newPhoneNumber, setNewPhoneNumber] = useState("")
  const [newCreateAt, setNewCreateAt] = useState("")
 

  const createClient = (event) => {
    event.preventDefault();
    const clientObj = {
      name: newName,
      address: newAddress,
      phoneNumber: newPhoneNumber,
      createAt: newCreateAt,

    };
    props.createClient(clientObj);
    handleClose();
  };


  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Create Client
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new client
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Name:"
              variant="outlined"
              onChange={(e) => setNewName(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Address:"
              variant="outlined" 
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Phone number:"
              variant="outlined"
              onChange={(e) => setNewPhoneNumber(e.target.value)}
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              variant="outlined"  
              type="date"
              onChange={(e) => setNewCreateAt(e.target.value)}
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
            <Button variant="contained" onClick={createClient}>
              Create client
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
