interface PostImageProps {
  name: string;
  time: string;
  imageUrl: string;
  edited?: string;
}

const PostImage = ({ name, time, imageUrl, edited }: PostImageProps) => {
  return (
    <div className="flex items-center">
      <img src={imageUrl} alt="Image" className="w-10 h-10 rounded-full mr-3" />
      <div>
        <h3 className="font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-500">
          {time}
          {edited && ` • ${edited}`}
        </p>
      </div>
    </div>
  );
};

export default PostImage;
