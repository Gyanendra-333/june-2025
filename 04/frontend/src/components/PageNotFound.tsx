import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function PageNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
            <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
            <div className="bg-orange-500 px-3 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>

            <p className="mt-6 text-lg text-gray-600">
                Oops! The page you're looking for doesn’t exist.
            </p>

            <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition-all"
            >
                <FaArrowLeft /> Go Back Home
            </Link>
        </div>
    );
}

export default PageNotFound;
