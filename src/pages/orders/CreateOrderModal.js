import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "../ModalWindow.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newCreateAt, setNewCreateAt] = useState("");

  //   const createClient = (event) => {
  //     event.preventDefault();
  //     const clientObj = {
  //       name: newName,
  //       address: newAddress,
  //       phoneNumber: newPhoneNumber,
  //       createAt: newCreateAt,

  //     };
  //     props.createClient(clientObj);
  //     handleClose();
  //   };
console.log(props.services)
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Create Order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Client Name</InputLabel>
              <Select label="Client Name:">
                {props.clients.map((client) => (
                  <MenuItem value={client.name}>{client.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Service</InputLabel>
              <Select label="Service:">
                {props.services.map((service) => (
                  <MenuItem value={service.job}>{service.job}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Price:"
              variant="outlined"
            />
                 <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Payments:"
              variant="outlined"
            />
                 <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              label="Price:"
              variant="outlined"
            />
            <TextField
              sx={{ marginTop: "5px", width: "300px" }}
              id="outlined-basic"
              variant="outlined"
              type="text"
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
            <Button variant="contained">Create client</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
