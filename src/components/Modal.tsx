import { GoArrowRight } from "react-icons/go";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";
import { useState } from "react";
import AuthHeading from "./AuthHeading";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="p-8 relative  flex flex-col gap-y-4 w-96 rounded-lg border-2 border-gray-500 text-gray-300 bg-[#26292D] ">
        <button
          onClick={onClose}
          className="absolute rounded-full top-4 right-4 "
        >
          <IoCloseOutline className="text-3xl bg-black rounded-full p-1 text-white " />
        </button>
        {toggle ? (
          <>
            <div>
              <AuthHeading
                heading="SIGN UP"
                text="Create an account to continue"
              />
            </div>
            <AuthInput
              type="text"
              label="Email"
              name="Email"
              size="h-10 px-3 text-sm leading-8"
              placeholder="Enter your Email"
            />
            <AuthInput
              type="text"
              label="Username"
              name="Username"
              size="h-10 px-3 text-sm leading-8"
              placeholder="Choose a preferred username"
            />
            <AuthInput
              type="password"
              label="RegisterPassword"
              name="RegisterPassword"
              size="h-10 px-3 text-sm leading-8"
              placeholder="Choose a strong password"
            />
            <AuthButton text="Continue" />
            <div className="-mt-2">
              <div className="text-gray-300 text-[11px] flex items-center">
                <span className="text-[#7f8084] mr-1">
                  Already have an account?
                </span>
                <span
                  onClick={handleClick}
                  className="flex items-center cursor-pointer"
                >
                  Login <GoArrowRight />
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div>
              <AuthHeading
                heading="WELCOME BACK"
                text="Log into your account"
              />
            </div>
            <AuthInput
              type="text"
              label="Email or Username"
              name="Email or Username"
              size="h-10 px-3 text-sm leading-8"
              placeholder="Enter your Email or Username"
            />
            <AuthInput
              type="password"
              label="Password"
              name="Password"
              size="h-10 px-3 text-sm leading-8"
              placeholder="Enter your password"
            />
            <AuthButton text="Login now" />
            <div className="-mt-2">
              <div className="text-gray-300 text-[11px] flex items-center">
                <span className="text-[#7f8084] mr-1">
                  Not registered yet?{" "}
                </span>
                <span
                  onClick={handleClick}
                  className="flex items-center cursor-pointer"
                >
                  Register <GoArrowRight />
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Modal;
