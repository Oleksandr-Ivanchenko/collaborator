import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Seo' },
    { key: 1, label: 'Продвижение' },
    { key: 2, label: 'Аналитика' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        boxShadow: 'none',
      }}
    >
      {chipData.map((data) => (
          <ListItem key={data.key}>
            <Chip
              sx={{
                borderRadius: '5px',
                height: 28,
              }}
              deleteIcon={<CloseIcon />}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        )
      )}
    </Paper>
  );
}
