interface AuthInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  size: string;
}

const AuthInput = ({
  label,
  name,
  placeholder,
  type,
  size,
}: AuthInputProps) => {
  return (
    <div>
      {type === "password" ? (
        <>
          <div className="flex justify-between">
            <label htmlFor={name} className="text-xs text-gray-300">
              {label}
            </label>
            <span className="text-[10px] text-gray-300">Forgot passoword?</span>
          </div>
        </>
      ) : (
        <>
          <label htmlFor={name} className="text-xs text-gray-300">
            {label}
          </label>
        </>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`border border-[#36373B] text-gray-900 mt-1 bg-[#26292D] placeholder-[#7F8084]  text-sm rounded-sm block w-full p-2.5 input-sm ${size} `}
      />
    </div>
  );
};

export default AuthInput;
