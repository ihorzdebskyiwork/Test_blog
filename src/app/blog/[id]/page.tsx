import posts from '@/constants/posts.json';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blogPost'; 
import { BlogPostPageProps } from '@/types/blogPostPageProps'; 

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const postId = params.id;

  const post: BlogPost | undefined = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <p className="text-center text-xl">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto my-24 p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800">{post.title}</h2>
      <p className="text-center text-lg text-gray-600 mt-2">{post.date}</p>

      <div className="relative mt-6 mb-8">
        <Image 
          height={500} 
          width={500}
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="prose lg:prose-xl mt-8 text-gray-800">
        <p>{post.content}</p>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
