import { VscComment } from "react-icons/vsc";

interface CommentProps {
  comments: string;
}

const PostsCommentButton = ({ comments }: CommentProps) => {
  return (
    <button className="text-gray-500 hover:text-white flex items-center gap-2 my-3 text-sm">
      <VscComment className="text-2xl text-gray-300" />
      {comments}
    </button>
  );
};

export default PostsCommentButton;
