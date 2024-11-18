import Link from 'next/link';

interface PostCardProps {
  title: string;
  date: string;
  image: string;
  slug: string;
}

const PostCard = ({ title, date, image, slug }: PostCardProps) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <Link href={`/blog/${slug}`} className="text-blue-500 mt-2 inline-block">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
