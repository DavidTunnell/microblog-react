import { useState } from "react";
import { useHistory } from "react-router-dom";
// import fetchCreate from "../utils/fetchCreate";
import { fetchCreate } from "../utils/api";
const Create = () => {
    //controlled inputs are a way where values can be tracked for web forms in react
    //input fields are kept in sync with state
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);
    //use history allows access to url history and the ability to update it (ex: redirect after an action)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        //create a blog object using the values in state above
        const blog = { title, body, author };

        setIsPending(true);

        fetchCreate(process.env.REACT_APP_BASE_URL + "/api/blogs/", blog).then(
            () => {
                setIsPending(false);
                //add the homepage to the history array so that the user is forwarded there after submit
                history.push("/");
            }
        );
    };

    return (
        <div className="create">
            <h2>Post a New Micro Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                {/*associate the value of the input with the state variables with value={title} and on 
                change we need to update the state with onChange and pass an anonymous function*/}
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default Create;
