// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Grid, Divider, Typography, CardHeader, IconButton } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';


// ----------------------------------------------------------------------

DataSets.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,

};

export default function DataSets({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>

      <Grid container spacing={2}>

          <CardHeader title={title} subheader={subheader} />



      </Grid>
      <Scrollbar>
        <Grid container spacing={2} sx={{ p: 3 }}>
          {list.map((dataset) => (
            <Grid item xs={6}>
              {/* <DataSetItem news={news} /> */}
              <DataSetItem key={dataset.id} news={dataset} />

            </Grid>
          ))}
        </Grid>
      </Scrollbar>

      {/* <Divider /> */}

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View all
        </Button>
      </Box> */}
    </Card>
  );
}

// ----------------------------------------------------------------------

DataSetItem.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }),
};

function DataSetItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box component="img" alt={title} src={image} sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }} />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      {/* <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography> */}
    </Stack>
  );
}
