import { HeadingWrapper } from './styles';

export const CustomHeading = ({ variant, children, ...props }) => {
  return (
    <HeadingWrapper
      varianttype={variant}
      variant={
        variant === 'subHead' ? 'h2' : variant === 'subHeadText' ? 'body1' : ''
      }
      {...props}
    >
      {children}
    </HeadingWrapper>
  );
};
