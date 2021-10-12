const Home = () => {
    const handleClick = (e) => {
        console.log(e);
    };

    const handleClickAgain = (e, name) => {
        console.log(name);
        console.log(e.target);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button
                //wrap the click handler in an anonymous arrow function to pass a parameter without it auto running
                onClick={(e) => {
                    handleClickAgain(e, "Dizzle");
                }}
            >
                Click me again
            </button>
        </div>
    );
};

export default Home;
