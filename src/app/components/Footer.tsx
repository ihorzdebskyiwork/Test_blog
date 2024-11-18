const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <div className="mt-4">{children}</div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <FooterSection title="Quick Links">
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
              <li>
                <p className="text-gray-400">Privacy Policy</p>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Follow Us">
            <div className="flex flex-col space-y-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </FooterSection>

          <FooterSection title="Contact Us">
            <ul>
              <li><span className="block text-gray-400">Email: contact@travelblog.com</span></li>
              <li><span className="block text-gray-400">Phone: (123) 456-7890</span></li>
              <li><span className="block text-gray-400">Address: 123 Adventure Lane, Wonderland</span></li>
            </ul>
          </FooterSection>

          <FooterSection title="Newsletter">
            <p className="text-gray-400">Subscribe to our newsletter to receive the latest travel updates.</p>
            <form action="#" method="POST" className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 w-full text-gray-800 rounded-md"
                required
              />
              <button type="submit" className="bg-blue-600 text-white mt-4 px-6 py-2 rounded-md hover:bg-blue-700 w-full">
                Subscribe
              </button>
            </form>
          </FooterSection>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400 text-sm">© 2024 Travel Blog. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
