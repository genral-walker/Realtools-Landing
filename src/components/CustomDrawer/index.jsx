import { DrawerWrapper } from './styles';

export const CustomDrawer = ({
  children,
  setIsOpen,
  isOpen,
  position = 'left',
}) => {
  return (
    <DrawerWrapper anchor={position} open={isOpen} onClose={() => setIsOpen(false)} >
      {children}
    </DrawerWrapper>
  );
};
