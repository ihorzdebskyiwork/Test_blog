import destinations from '../constants/destinations.json';
import posts from '../constants/posts.json';
import DestinationCard from '../components/DestinationCard';
import BlogPostCard from '../components/BlogPostCard';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-semibold text-center">{children}</h2>
);

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-96">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/hero-travel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center h-full text-center text-white">
              <h1 className="text-4xl font-bold">Explore the World with Us</h1>
              <p className="mt-4 text-lg">Your next adventure is just a click away.</p>
          </div>
        </section>

        <section className="p-8">
          <SectionTitle>Popular Destinations</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <SectionTitle>Recent Blog Posts</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4">
            {posts.slice(0, 3).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
