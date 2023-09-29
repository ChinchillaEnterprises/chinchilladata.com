import PropTypes from 'prop-types';

// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack, Link, Card, Grid, Divider, Typography, CardHeader } from '@mui/material';
// utils

import Scrollbar from '../../../components/scrollbar';

const StyledProductImg = styled('img')({
  top: 0,
  width: '25%',
  height: '25%',
  objectFit: 'cover',
  position: 'absolute',

});

// ----------------------------------------------------------------------

QDM.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function QDM({ title, list, ...other }) {
  const theme = useTheme();



  return (
    <Card {...other}>
      <CardHeader title={title} />
      <Scrollbar>
        <Grid container spacing={2} sx={{ p: 3 }}>
          {list.map((qdms) => (
            <Stack spacing={2} sx={{ p: 3 }}>
              <QDMbot key={qdms.id} attys={qdms} />

            </Stack>
          ))}
        </Grid>
      </Scrollbar>

    </Card>
  );
}

// ----------------------------------------------------------------------

QDMbot.propTypes = {
  attys: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,

    title: PropTypes.string,
  }),
};

function QDMbot({ attys }) {
  const { image, title, description, postedAt } = attys;
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    // send the filename over to the data sets component
    // You can perform the file upload or other actions here
  };
  
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Grid container spacing={2} sx={{ p: 3 }} lg={2} />
      <Grid item xs={6} md={6} lg={10}>
        <label htmlFor={`file-upload-${attys.id}`}>
          <Box 
            component="img" 
            alt={title} 
            src={image} 
            sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0, cursor: 'pointer' }} 
          />
          <input 
            type="file" 
            id={`file-upload-${attys.id}`} 
            style={{ display: 'none' }} 
            onChange={handleFileChange}
          />
        </label>
        <Typography variant="p" align='center'>
          {title}
        </Typography>
      </Grid>
    </Stack>
  );
}
