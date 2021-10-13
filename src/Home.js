import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs");
    return (
        <div className="home">
            {/* conditional rendering for error message to user*/}
            {error && <div>{error}</div>}
            {/* message to show user while data is loading (while async call is happening)*/}
            {isPending && <div>Loading...</div>}
            {/* need to make sure blogs data is populated from api call before mapping (conditional templating)*/}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
