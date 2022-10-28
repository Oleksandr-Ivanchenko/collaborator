import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [time, setTime] = React.useState('instantly');

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      setIsOpen(false);
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  const menuProps = {
    variant: 'menu',
    disableScrollLock: true,
  };

  return (
    <div>
      <FormControl sx={{ width: 225, height: 40 }}>
        <Select
          sx={{ color: '#858585'}}
          value={time}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'roboto': 'Without label' }}
          open={isOpen}
          onOpen={() => {
            setIsOpen(true);
          }}
          onClose={() => {
            setIsOpen(false);
          }}
          MenuProps={menuProps}
        >
          <MenuItem value="instantly">
            Мгновенно
          </MenuItem>
          <MenuItem value="onceaday">1 один раз в день</MenuItem>
          <MenuItem value="all">Отключить</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
