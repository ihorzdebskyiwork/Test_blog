import { Post } from '@/types/post';
import PostCard from './PostCard';

const BlogPostCard = ({ post }: { post: Post }) => (
  <div
    key={post.id}
    className="group border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  >
    <PostCard
      title={post.title}
      date={post.date}
      image={post.image}
      slug={post.id.toString()}
    />
  </div>
);

export default BlogPostCard;
