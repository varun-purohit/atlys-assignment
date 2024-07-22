import PostsImage from "./PostsImage";
import { HiDotsHorizontal } from "react-icons/hi";
import PostsTextarea from "./PostsTextarea";
import PostsCommentButton from "./PostsCommentButton";

interface PostsProps {
  imageUrl: string;
  edited?: string;
}

const Posts = ({ imageUrl, edited }: PostsProps) => {
  return (
    <div className="my-2">
      <div className="bg-[#26292D] px-4 py-6 rounded-md">
        <div className="flex items-center justify-between mb-3">
          <PostsImage
            imageUrl={imageUrl}
            name="Theresa Webb"
            time="5mins ago"
            edited={edited}
          />
          <button className="text-gray-300 hover:text-white">
            <HiDotsHorizontal />
          </button>
        </div>
        <PostsTextarea />
        <PostsCommentButton comments="24 Comments" />
      </div>
    </div>
  );
};

export default Posts;
