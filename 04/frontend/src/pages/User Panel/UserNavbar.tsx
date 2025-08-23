import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../../public/assets/logo.png";

function UserNavbar() {
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching:", search); // baad mein API call add karenge
    };

    return (
        <header className="bg-[#0e2436] text-[#212121] sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center cursor-pointer">
                    <img
                        src={logo}
                        alt="NovaMart Logo"
                        className="w-38"
                    />
                </div>

                {/* Search Bar */}
                <form
                    onSubmit={handleSearch}
                    className="flex-1 mx-6 hidden md:flex"
                >
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for products, brands and more"
                        className="w-full px-4 py-2 rounded-l-lg text-black outline-none bg-gray-200"
                    />
                    <button
                        type="submit"
                        className="bg-[#FF9F00] text-gray-100 px-4 rounded-r-lg flex items-center justify-center hover:bg-[#E68900] cursor-pointer transition-all duration-200"
                    >
                        <FaSearch />
                    </button>
                </form>

                {/* Right Menu */}
                <div className="flex items-center space-x-6">
                    <button className="hover:text-gray-300 cursor-pointer text-white flex items-center gap-2">
                        <FaUser /> <span className="hidden md:inline">Login</span>
                    </button>
                    <button className="hover:text-gray-300 text-white cursor-pointer transition-all duration-200 flex items-center gap-2">
                        <FaShoppingCart /> <span className="hidden md:inline">Cart</span>
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar (visible only on small screens) */}
            <div className="px-4 pb-3 md:hidden">
                <form onSubmit={handleSearch} className="flex">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-l-lg text-black outline-none bg-gray-200"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 px-4 rounded-r-lg flex items-center justify-center hover:bg-orange-600"
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default UserNavbar;
