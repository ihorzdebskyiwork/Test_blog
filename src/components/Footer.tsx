import Link from "next/link";
import footerData from "../constants/footerData.json"

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
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("http") ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </FooterSection>
          <FooterSection title="Follow Us">
            <div className="flex flex-col space-y-2">
              {footerData.followUs.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <i className={social.icon}></i> {social.platform}
                </Link>
              ))}
            </div>
          </FooterSection>
          <FooterSection title="Contact Us">
            <ul>
              {footerData.contact.map((contact, index) => (
                <li key={index}>
                  <span className="block text-gray-400">{contact.label}: {contact.value}</span>
                </li>
              ))}
            </ul>
          </FooterSection>
          <FooterSection title="Newsletter">
            <p className="text-gray-400">{footerData.newsletter.description}</p>
            <form action="#" method="POST" className="mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 w-full text-gray-800 rounded-md"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white mt-4 px-6 py-2 rounded-md hover:bg-blue-700 w-full"
              >
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
