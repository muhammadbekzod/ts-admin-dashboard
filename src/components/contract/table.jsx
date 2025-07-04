import * as React from "react";
import Table from "@mui/joy/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Box, Container, Textarea } from "@mui/joy";

import Input from "@mui/joy/Input";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
export default function CamperTable() {
  const [open, setOpen] = React.useState(false);
  const [openAdd, setAddOpen] = React.useState(false);
  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "end", marginBottom: "30px" }}
      >
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => setAddOpen(true)}
        >
          Add Product
        </Button>
      </Box>
      <Table aria-label="basic table">
        <thead>
          <tr>
            <th>No</th>
            <th style={{ width: "40%" }}>Car Name</th>
            <th>year</th>
            <th>People</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Location</th>
            <th style={{ width: "20%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Name</td>
            <td>237</td>
            <td>9</td>
            <td>37</td>
            <td>4.3</td>
            <td>Name</td>
            <td>
              <EditIcon color="primary" />
              <DeleteIcon color="danger" onClick={() => setOpen(true)} />
            </td>
          </tr>
        </tbody>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
          >
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              sx={{ fontWeight: "lg", mb: 1 }}
            >
              Are u sure DELETING?
            </Typography>
            <Typography
              id="modal-desc"
              textColor="text.tertiary"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Button color="success" sx={{ flex: 1 }}>
                YES
              </Button>
              <Button
                color="danger"
                sx={{ flex: 1 }}
                onClick={() => setOpen(false)}
              >
                NO
              </Button>
            </Typography>
          </Sheet>
        </Modal>
      </Table>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openAdd}
        onClose={() => setAddOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: "lg", mb: 1 }}
          >
            Add New Product
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <Select
              placeholder="Select Camper Car"
              indicator={<KeyboardArrowDown />}
              sx={{
                margin: "10px 0 20px 0",
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="motor">Motor</Option>
              <Option value="caravan">Caravan</Option>
              <Option value="used">Used Car</Option>
              <Option value="tuning">Tuning Car</Option>
            </Select>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Box>
                <Typography>Name</Typography>
                <Input placeholder="Type in here…" />
              </Box>
              <Box>
                <Typography>Brand</Typography>
                <Input placeholder="Type in here…" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", margin: "20px 0" }}>
              <Box>
                <Typography>Price</Typography>
                <Input placeholder="Type in here…" />
              </Box>
              <Box>
                <Typography>People</Typography>
                <Input placeholder="Type in here…" />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Box>
                <Typography>Location</Typography>
                <Input placeholder="Type in here…" />
              </Box>
              <Box>
                <Typography>Year</Typography>
                <Input placeholder="Type in here…" />
              </Box>
            </Box>
            <Box sx={{ margin: "20px 0" }}>
              <Typography>Description 1</Typography>
              <Textarea minRows={2} />
            </Box>

            <Typography>Description 2</Typography>
            <Textarea minRows={2} />
            <Box sx={{ margin: "20px 0" }}>
              <Typography>Description 3</Typography>
              <Textarea minRows={2} />
            </Box>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}>
            <Button color="danger" variant="outlined">
              Cencel
            </Button>
            <Button color="success">Add Product</Button>
          </Box>
        </Sheet>
      </Modal>
    </Container>
  );
}
