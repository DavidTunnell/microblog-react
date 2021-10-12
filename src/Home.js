import { useState } from "react";

const Home = () => {
    //the state of a component refers to the data being used by a component at a point in time
    //you must use state and not variables because it wont update the page
    //this is because you must use reactive variables (variables that react looks at to check/watch for state change)
    //this is done using hooks (useState hook in particular)
    const [name, setName] = useState("Dizzle");
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName("Dizzle Tizzle"); //this set update is reactive
        setAge(30);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name} is {age} years old.
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;
