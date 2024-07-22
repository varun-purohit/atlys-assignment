import { useState } from "react";

const PostsTextarea = () => {
  const [textValue, setTextValue] = useState("");

  return (
    <div className="flex items-center bg-[#131319] rounded-lg p-3">
      <div className="bg-[#26292D] p-2 rounded-full flex items-center justify-center h-12 w-12 mr-3">
        👋
      </div>
      <textarea
        placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. "
        value={textValue}
        rows={3}
        onChange={(e) => setTextValue(e.target.value)}
        className="bg-transparent text-white placeholder-gray-400 flex-grow outline-none"
      />
    </div>
  );
};

export default PostsTextarea;
