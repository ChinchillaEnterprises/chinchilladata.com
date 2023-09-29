import PropTypes from 'prop-types';
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
  Grid,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

AppTasks.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
  botMessage: PropTypes.string, // Added new prop for botMessage
};

export default function AppTasks({ title, botMessage, ...other }) {
  const [userQuery, setUserQuery] = useState(""); // State to hold user's input

  return (
    <Card {...other}>
      {/* <CardHeader title={title} /> */}

      <Stack alignItems="center" spacing={2} sx={{ px: '10%' }}>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} align='center'/>
          
        
        {/* Display chatbot text */}

        <Grid container spacing={2} sx={{ p: 5 }}>
        <Paper elevation={3} style={{ padding: '10px', maxWidth: '400px',  wordWrap: 'break-word' }}>
          <Typography variant="body1" align='left'>
            {botMessage || "I'm here to assist you!"}
          </Typography>
        </Paper>

        <Paper elevation={3} style={{ padding: '10px', maxWidth: '400px', wordWrap: 'break-word' }}>
          <Typography variant="body1" align='left'>
            {botMessage || "I'm here to assist you!"}
          </Typography>
        </Paper>
        </Grid>

        {/* Enhanced TextField for user's questions */}
        <TextField
          label="Ask a question"
          fullWidth
          variant="outlined"
          placeholder="Type your question here..."
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          style={{ padding: '10px', wordWrap: 'break-word' }}
        />
      </Stack>
    </Card>
  );
}
