import { FormGroup, Stack, styled, Switch } from '@mui/material';
import React from 'react';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 23,
  padding: 0,
  display: 'flex',
  margin: 2,
  marginLeft: '100px',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 30,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(17px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(18px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#3861FB',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 19,
    height: 19,
    borderRadius: 14,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export const Switcher  = ({
  isChecked, 
  onCheck,
}) => {
  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch 
          inputProps={{ 'aria-label': 'ant design' }} 
          checked={isChecked}
          onChange={onCheck}
        />
      </Stack>
    </FormGroup>
  );
};