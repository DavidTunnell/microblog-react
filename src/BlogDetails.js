import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    //this allows ups to grab parameters from the URL routes with destructuring
    const { id } = useParams();
    const {
        data: blog,
        error,
        isPending,
    } = useFetch("http://localhost:8000/blogs/" + id);

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
