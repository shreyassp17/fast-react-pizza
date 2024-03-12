import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-4 py-2 rounded-full text-sm bg-yellow-100 placeholder:text-stone-400
                sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 transition-all duration-300"
            />
        </form>
    );
}
