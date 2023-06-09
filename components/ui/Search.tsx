import { Box, IconButton, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, md: 500 },
  bgcolor: "background.paper",
  boxShadow: 0,
  borderRadius: "16px",
  p: 4,
};
interface SearchProps {
  open: boolean;
  handleClose: () => void;
}

const Search = ({ open, handleClose }: SearchProps) => {
  const [isOpen, setOpen] = React.useState(open);
  const handleModalClose = () => {
    handleClose();
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Title propStyle={{ fontSize: "40px", textAlign: "center" }}>
          Search
        </Title>
        <TextField
          sx={{ mt: "20px" }}
          fullWidth
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
        <Box
          sx={{
            mt: "10px",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all",
            cursor: "pointer",
            p: 1,
            ":hover": {
              bgcolor: "#ffbe33",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "50px",
              height: "50px",
            }}
          >
            <Image
              style={{ borderRadius: "6px" }}
              src="/pizza.webp"
              alt="who we are image"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>Good Pizza</Typography>
          <Typography sx={{ fontWeight: "bold" }}>$10</Typography>
        </Box>
        <IconButton
          onClick={handleModalClose}
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            ":hover": { color: "#ffbe33" },
          }}
        >
          <AiFillCloseCircle />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default Search;
