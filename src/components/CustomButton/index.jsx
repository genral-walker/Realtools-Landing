import { ButtonWrapper } from './styles';

export const CustomButton = ({ children, displayType, size='medium' }) => {
  return <ButtonWrapper size={size} displaytype={displayType}>{children}</ButtonWrapper>;
};
