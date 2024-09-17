'use client';


import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function LanguageSelect() {
  const [language, setLanguage] = React.useState('EN');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth variant='outlined'>
        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: '70px', // Set a fixed width for the dropdown
            paddingRight: '0 !important',
            '.MuiSelect-select': {
                width: '10px !important',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              paddingLeft: '15px',
              paddingTop: '8px',
              paddingBottom: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'white',
            },
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiSelect-icon': {
                color: 'white',
                fontSize: '1.5rem', // Adjust the size of the icon if needed
              },
          }}
        >
          <MenuItem value="EN">EN</MenuItem>
          <MenuItem value="ES">ES</MenuItem>
          <MenuItem value="FR">FR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
