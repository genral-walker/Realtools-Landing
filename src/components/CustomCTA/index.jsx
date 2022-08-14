import { Card, CardContent, Stack, Typography } from '@mui/material';
import { CustomButton, CustomHeading } from 'components';
import { ReactComponent as CTADecoratorBG } from 'assets/icons/queries-decorator.svg';
import { CTAWrapper } from './styles';

export const CustomCTA = ({
  heading,
  text,
  btnText,
  btnRightIcon: EndIcon,
}) => {
  return (
    <CTAWrapper direction={'row'}>
      <CTADecoratorBG/>
      <Card>
        <Stack
          direction="row"
          spacing={{ xs: 6, xl: 8 }}
          justifyContent="space-between"
          className="flex-container"
        >
          <CardContent>
            <CustomHeading variant="subHead">{heading}</CustomHeading>
            <Typography variant="body1" mt={1.3}>
              {text}
            </Typography>
          </CardContent>

          <CustomButton endIcon={<EndIcon />}>{btnText}</CustomButton>
        </Stack>
      </Card>
    </CTAWrapper>
  );
};
