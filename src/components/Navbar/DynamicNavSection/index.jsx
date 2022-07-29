import { Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { DynamicNavWrapper } from './styles';
import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { CustomButton } from 'components';

export const DynamicNavSection = ({ shouldMobileShow }) => (
  <>
    {shouldMobileShow ? (
      <DynamicNavWrapper mobile elevation={0} position="static">
        <Toolbar>
          <Box flexDirection={'column'}>
            <Stack direction="row" className="hero">
              <HeroIcon />
              <Button href="#">
                <Typography variant="h3">StorageConnect</Typography>
              </Button>
            </Stack>
            <Stack direction="column" spacing={1.5} ml="auto">
              <Button>Active Listings</Button>
              <Button>Sell your Self Storage</Button>
              <Button>Free Evaluation</Button>
              <Button>Learn</Button>
              <CustomButton displayType={'secondary'} size={'small'}>
                Contact
              </CustomButton>
            </Stack>
          </Box>
        </Toolbar>
      </DynamicNavWrapper>
    ) : (
      <>
        <Button>Active Listings</Button>
        <Button>Sell your Self Storage</Button>
        <Button>Free Evaluation</Button>
        <Button>Learn</Button>
        <CustomButton displayType={'secondary'}>
          Contact
        </CustomButton>
      </>
    )}
  </>
);
