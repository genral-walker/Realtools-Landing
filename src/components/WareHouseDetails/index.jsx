import { CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { CustomButton } from 'components';
import { WareHouseDetailsWrapper } from './styles';

export const WareHouseDetails = (props) => {
  const { img, header, text2, text3, text4, btnText, bg, boxShadow } = props;
  const { icon: HeadingIcon } = header;
  const { icon: Text2Icon } = text2;
  const { icon: Text3Icon } = text3;
  const { icon: Text4Icon } = text4;

  return (
    <WareHouseDetailsWrapper
      bg={bg}
      boxshadow={boxShadow}
      elevation={boxShadow ? 1 : 0}
    >
      <CardMedia component="img" image={img} alt={header.name} />

      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <HeadingIcon />
            <Typography variant="h4">{header.name}</Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Text2Icon style={{ alignSelf: 'center' }} />
            <Typography variant="body2">
              {text2.name} &nbsp; {text2.nameValue}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Text3Icon style={{ alignSelf: 'center' }} />
            <Typography variant="body2">
              {text3.name} &nbsp; {text3.nameValue}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Text4Icon style={{ alignSelf: 'center' }} />
            <Typography variant="body2">
              {text4.name} &nbsp; {text4.nameValue}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      <Stack className="btn-container" alignItems="center">
        <CustomButton>{btnText}</CustomButton>
      </Stack>
    </WareHouseDetailsWrapper>
  );
};
