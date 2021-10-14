import { useParams } from "react-router-dom";
const BlogDetails = () => {
    //this allows ups to grab parameters from the URL routes with destructuring
    const { id } = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details</h2>
            <p>{id}</p>
        </div>
    );
};

export default BlogDetails;
