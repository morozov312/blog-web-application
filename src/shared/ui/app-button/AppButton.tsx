import { ReactNode } from 'react';

interface IAppButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const AppButton = ({ children, onClick }: IAppButtonProps) => {
  return (
    <button className='bg-blue-900 px-8 py-3 rounded-xl' onClick={onClick}>
      {children}
    </button>
  );
};

export default AppButton;
