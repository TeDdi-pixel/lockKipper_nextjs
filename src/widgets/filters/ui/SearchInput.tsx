"use client";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {
  return (
    <TextField
      label="Search"
      fullWidth
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{marginBottom: '17.5px'}}
    />
  );
};
