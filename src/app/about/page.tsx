import Navbar from "@/app/components/Navbar";

export default function About() {
  return (
    <div>
      <main className="p-8">
        <section className="bg-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">Learn more about our journey, our mission, and the team behind this project.</p>
        </section>

        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              We aim to inspire wanderlust and share the beauty of the world. Our platform provides travel guides, tips, and insights to help you make the most out of your next adventure. Whether you're looking for hidden gems, local experiences, or just inspiration, we have you covered.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="text-center border rounded-lg p-6 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <img src="/images/team1.png" alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="mt-4 text-gray-700">Jane is passionate about exploring new places and connecting people through travel. She founded this platform to help others experience the world's wonders.</p>
            </div>
            <div className="text-center border rounded-lg p-6 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <img src="/images/team2.png" alt="Team Member 2" className="w-32 h-32 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">John Smith</h3>
              <p className="text-gray-600">Content Creator & Photographer</p>
              <p className="mt-4 text-gray-700">John creates engaging travel content that helps users discover new destinations. He's always on the lookout for the next great adventure to share with the world.</p>
            </div>
            <div className="text-center border rounded-lg p-6 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <img src="/images/team3.png" alt="Team Member 3" className="w-32 h-32 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
              <p className="text-gray-600">Community Manager</p>
              <p className="mt-4 text-gray-700">Emily is dedicated to fostering a positive and engaging community around travel. She ensures users can connect and share their travel experiences.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}