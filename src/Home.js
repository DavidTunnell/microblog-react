import { useState } from "react";

const Home = () => {
    //the state of a component refers to the data being used by a component at a point in time
    //you must use state and not variables because it wont update the page
    //this is because you must use reactive variables (variables that react looks at to check/watch for state change)
    //this is done using hooks (useState hook in particular)
    const [blogs, setBlogs] = useState([
        {
            title: "My new website",
            body: "lorem ipsum...",
            author: "mario",
            id: 1,
        },
        {
            title: "Welcome party!",
            body: "lorem ipsum...",
            author: "yoshi",
            id: 2,
        },
        {
            title: "Web dev top tips",
            body: "lorem ipsum...",
            author: "mario",
            id: 3,
        },
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
