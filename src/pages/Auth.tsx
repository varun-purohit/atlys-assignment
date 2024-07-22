import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import AuthButton from "../components/AuthButton";
import AuthInput from "../components/AuthInput";
import AuthHeading from "../components/AuthHeading";
import { Link } from "react-router-dom";

const Auth = () => {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="absolute top-2 right-2 text-white">
        <Link className="hover:underline" to="/">
          Homepage
        </Link>
      </div>
      <section className="grid h-screen place-items-center">
        <div className="p-8  flex flex-col gap-y-4 w-96 rounded-lg border-2 border-gray-500 text-gray-300 bg-[#26292D] ">
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
    </>
  );
};

export default Auth;
