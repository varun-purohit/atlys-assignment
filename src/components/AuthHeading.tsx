interface AuthHeadingProps {
  heading: string;
  text: string;
}

const AuthHeading = ({ heading, text }: AuthHeadingProps) => {
  return (
    <>
      <p className="text-[#7f8084] text-center text-[11px]">{heading}</p>
      <p className="text-center text-white text-sm">{text}</p>
    </>
  );
};

export default AuthHeading;
