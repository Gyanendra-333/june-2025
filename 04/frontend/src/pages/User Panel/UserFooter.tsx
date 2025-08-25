import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../public/assets/logo.png"

function UserFooter() {
    return (
        <footer className="bg-[#0e2436] text-gray-300 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Column 1 - Brand Logo */}
                <div>
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt="Novamart Logo"
                            className="w-32 h-auto mb-3"
                        />
                    </Link>
                    <p className="mt-2 text-sm">
                        Making lives better with innovation and trust.
                        Join us in our journey.
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3 - Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/electronics" className="hover:text-white">Electronics</Link></li>
                        <li><Link to="/sports-healthcare" className="hover:text-white">Sports & Healthcare</Link></li>
                        <li><Link to="/fashion" className="hover:text-white">Fashion</Link></li>
                        <li><Link to="/beauty-food" className="hover:text-white">Beauty & Food</Link></li>
                    </ul>
                </div>

                {/* Column 4 - Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Nova Pvt Ltd. All rights reserved.
            </div>
        </footer>
    );
}

export default UserFooter;
