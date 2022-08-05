import { CardContent, CardMedia, Icon, Stack, Typography } from '@mui/material';
import { CustomButton } from 'components';
import { LearnDetailsWrapper } from './styles';

export const LearnDetails = (props) => {
  const { img, title, icons, btnText } = props;

  return (
    <LearnDetailsWrapper>
      <CardMedia component="img" image={img} alt={title} />

      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Stack spacing={1} direction="row">
          {icons.map(({ icon: Icon, text }, idx) => (
            <Stack
              direction="row"
              key={idx}
              alignItems="center"
              justifyContent="space-between"
              spacing={0}
            >
              <Icon />
              <Typography variant="body2">{text}</Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>

      <Stack className="btn-container" alignItems="center">
        <CustomButton>{btnText}</CustomButton>
      </Stack>
    </LearnDetailsWrapper>
  );
};
