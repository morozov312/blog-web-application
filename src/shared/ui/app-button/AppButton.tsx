interface IAppButtonProps {
  text?: string;
  onClick?: () => void;
}

const AppButton = ({ text, onClick }: IAppButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};

export default AppButton;
