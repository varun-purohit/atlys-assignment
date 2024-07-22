interface AuthButtonProps {
  text: string;
}

const AuthButton = ({ text }: AuthButtonProps) => {
  return (
    <button className="bg-blue-500 rounded-sm py-2 text-sm text-white">
      {text}
    </button>
  );
};

export default AuthButton;
