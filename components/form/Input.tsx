import { Box, TextField } from "@mui/material";
import React from "react";

const Input = ({ input, onChange, onBlur }: any) => {
  // Burdaki typescript hatası düzenlenecek!!!

  return (
    <Box>
      <TextField
        error={input.touched && input.errorsMessage ? true : false}
        helperText={
          input.touched && input.errorsMessage ? input.errorsMessage : ""
        }
        onChange={onChange}
        onBlur={onBlur}
        fullWidth
        id="outlined-basic"
        variant="outlined"
        size="normal"
        {...input}
      />
    </Box>
  );
};

export default Input;
