import { ButtonWrapper } from './styles';

export const CustomButton = ({ children, displayType, size, ...props }) => {
  return (
    <ButtonWrapper buttonsize={size} displaytype={displayType} {...props}>
      {children}
    </ButtonWrapper>
  );
};
