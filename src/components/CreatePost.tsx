import { useState } from "react";

const CreatePost = () => {
  const [textValue, setTextValue] = useState("");

  return (
    <div className="my-2 border-2 border-gray-600 rounded-lg ">
      <div className="bg-[#26292D] px-4 py-6 rounded-md">
        <h2 className="text-[#c6c7ca] my-2">Create Post</h2>
        <div className="flex items-center bg-[#131319] rounded-lg p-3">
          <div className="bg-[#26292D] p-2 h-12 w-12 flex items-center justify-center rounded-full mr-3">
            💬
          </div>
          <input
            type="text"
            placeholder="How are you feeling today?"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="bg-transparent text-white placeholder-gray-400 flex-grow outline-none"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-10 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
