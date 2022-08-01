import { FormWrapper } from './styles';

import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';
import { ReactComponent as PropertyIcon } from 'assets/icons/property.svg';
import { ReactComponent as PeopleIcon } from 'assets/icons/people.svg';
import { ReactComponent as PercentIcon } from 'assets/icons/percentage.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { FormControl, FormControlLabel, Stack, TextField } from '@mui/material';
import { CustomButton } from 'components';

export const Form = () => {
  return (
    <FormWrapper component={'form'}>
      <FormControl required>
        <Stack spacing={{ md: 2, xs: 2.3 }} direction={{ md: 'row', xs: 'column' }}>
          <FormControlLabel
            label="Location"
            labelPlacement="top"
            control={
              <TextField
                className="first"
                size="small"
                placeholder="Search Location"
                InputProps={{ startAdornment: <LocationIcon /> }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            label="Properties"
            labelPlacement="top"
            control={
              <TextField
                className="second"
                size="small"
                placeholder="Unit Count"
                InputProps={{ startAdornment: <PropertyIcon /> }}
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            labelPlacement="top"
            label="Occupancy"
            control={
              <TextField
                placeholder="Occupancy"
                className="third"
                size="small"
                InputProps={{
                  startAdornment: <PeopleIcon />,
                  endAdornment: <PercentIcon />,
                }}
              />
            }
          ></FormControlLabel>
          <CustomButton
            displayType={'secondary'}
            size="small"
            startIcon={<SearchIcon />}
          >
            Search
          </CustomButton>
        </Stack>
      </FormControl>
    </FormWrapper>
  );
};
