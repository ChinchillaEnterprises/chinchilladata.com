import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Card,
  Stack,
  Divider,
  Popover,
  Checkbox,
  MenuItem,
  IconButton,
  CardHeader,
  FormControlLabel,
  Typography,
  TextField,
  Grid
} from '@mui/material';

AppTasks.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppTasks({ title, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} />

      <Stack alignItems="center" spacing={2} sx={{ px: '10%' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} align='center'>
          {title}
        </Typography>
        <TextField label="Retrieve information" fullWidth sx={{ mt: 6, mb: 6 }} />
      </Stack>
    </Card>
  );
}
