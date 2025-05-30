import { Box } from '@mui/material';

const Divider = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid #878787',
        my: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        mx: 'auto'
      }}
    />
  );
};

export default Divider;