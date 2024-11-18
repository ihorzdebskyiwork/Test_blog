const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="mt-4">
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
                  <p className="text-gray-400 hover:text-white">Privacy Policy</p>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="mt-4 flex flex-col space-y-2"> 
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <ul className="mt-4">
                <li>
                  <span className="block text-gray-400">Email: contact@travelblog.com</span>
                </li>
                <li>
                  <span className="block text-gray-400">Phone: (123) 456-7890</span>
                </li>
                <li>
                  <span className="block text-gray-400">Address: 123 Adventure Lane, Wonderland</span>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Newsletter</h3>
              <p className="mt-4 text-gray-400">
                Subscribe to our newsletter to receive the latest travel updates.
              </p>
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
            </div>
          </div>
  
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Travel Blog. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
