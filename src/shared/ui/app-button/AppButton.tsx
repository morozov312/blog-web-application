import { ReactNode } from 'react';

interface IAppButtonProps {
  children?: ReactNode;
  htmlType?: 'submit' | 'button';
  onClick?: () => void;
}

const AppButton = ({ children, onClick, htmlType }: IAppButtonProps) => {
  return (
    <button
      type={htmlType}
      className='bg-blue-900 px-8 py-3 rounded-xl'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AppButton;
