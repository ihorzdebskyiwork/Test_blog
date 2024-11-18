import destinations from '../app/data/destinations.json';
import posts from '../app/data/posts.json';
import PostCard from "./components/PostCard";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-96">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/videos/hero-travel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
            <div>
              <h1 className="text-4xl font-bold">Explore the World with Us</h1>
              <p className="mt-4 text-lg">Your next adventure is just a click away.</p>
            </div>
          </div>
        </section>

        <section className="p-8">
          <h2 className="text-3xl font-semibold text-center">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {destinations.map((destination) => (
              <div key={destination.id} className="group border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <p className="mt-2 text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <h2 className="text-3xl font-semibold text-center">Recent Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="group border rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <PostCard
                  title={post.title}
                  date={post.date}
                  image={post.image}
                  slug={post.id.toString()}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
