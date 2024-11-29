
import { Helmet } from "react-helmet";

const Error = () => {
    return (
        
        <div className="flex flex-col space-y-6 justify-center items-center my-8 py-8">
            <Helmet>
            <title>404 Not Found</title>
            </Helmet>
            <h1 className="font-bold text-4xl">404 Error Page</h1>
            <p className="font-bold text-2xl">Sorry! Page is not found</p>
            <a href="/" className="btn bg-[#23BE0A] text-white">Go Home</a>
        </div>
    );
};

export default Error;