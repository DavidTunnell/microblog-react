import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //the state of a component refers to the data being used by a component at a point in time
    //you must use state and not variables because it wont update the page
    //this is because you must use reactive variables (variables that react looks at to check/watch for state change)
    //this is done using hooks (useState hook in particular)
    const [blogs, setBlogs] = useState(null);
    const [name, setName] = useState("mario");

    //useEffect is a hook that runs every time a component renders (on page load and state change)
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            });
        //you can also look with state, but changing it can put you in an infinite loop
        //if you dont want to always run this every render, pass in a dependency array as a second argument
        //an empty array makes it only run the 1st time on load, not subsequent state changes
        //or you can pass state variables, this will only run when those state variables are updated
    }, []);
    return (
        <div className="home">
            {/* need to make sure blogs data is populated from api call before mapping (conditional templating)*/}
            {blogs && <BlogList
                blogs={blogs}
                title="All Blogs"
            />}
        </div>
    );
};

export default Home;
