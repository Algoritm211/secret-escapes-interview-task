import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { Field, Form } from 'react-final-form';
import SearchIcon from '@mui/icons-material/Search';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { useNavigate } from 'react-router-dom';
import { composeValidators, requiredValidator } from '../../../components/shared/forms/validators';

interface FormProps {
  location: string;
}

export const SearchSalesForm: React.FC = () => {
  const navigator = useNavigate();

  const onSubmit = async (values: FormProps) => {
    navigator({
      pathname: '/search',
      search: `query=${values.location}`,
    });
  };

  return (
    <Form<FormProps>
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => {
        return (
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Grid container flexDirection="column" alignItems="center" gap={2}>
              <Field
                name="location"
                validate={composeValidators(requiredValidator)}
                render={({ input, meta }) => {
                  const { error, touched, submitError } = meta;
                  return (
                    <TextField
                      {...input}
                      fullWidth
                      error={!!(touched && (error || submitError))}
                      label="Search location. Eg: London"
                      helperText={touched && (error || submitError)}
                    />
                  );
                }}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={submitting}
                startIcon={submitting ? <HourglassBottomIcon /> : <SearchIcon />}
              >
                Search place
              </Button>
            </Grid>
          </Box>
        );
      }}
    />
  );
};
