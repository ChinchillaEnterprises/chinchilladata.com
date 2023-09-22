import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Stack, Link, Card, Grid, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { useChart } from '../../../components/chart';
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
