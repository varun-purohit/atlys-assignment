import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import { imageData } from "../utils/data";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Main = () => {
  const { url1, url2 } = imageData;
  const [isDisplayed, setIsDisplayed] = useState(false);

  function openModal() {
    setIsDisplayed(true);
  }

  function closeModal() {
    setIsDisplayed(false);
  }
  return (
    <>
      {isDisplayed && <Modal onClose={closeModal} />}
      <div className="absolute top-2 right-2 text-white">
        <Link className="hover:underline" to="login">
          Login/Register
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div
          className={`max-w-[700px] w-full my-2 mt-11 cursor-pointer `}
          onClick={openModal}
        >
          <div className="my-9">
            <h1 className="text-[#c6c7ca] text-3xl mb-3">Hello Jane</h1>
            <p className="text-[#7F8084]">
              How are you doing today? Would you like to share something with
              community🤗
            </p>
          </div>

          <CreatePost />
          <Posts imageUrl={url1} />
          <Posts imageUrl={url2} edited="Edited" />
        </div>
      </div>
    </>
  );
};
export default Main;
