import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//top use the react router package, surround the whole app with the router component
function App() {
    return (
        <Router>
            {/* ^ Here the app is wrapped with the router */}
            <div className="App">
                <Navbar />
                <div className="content">
                    {/* Next is the decision of where page content to go based on different routes
                        All routes go in the switch component so only one renders at a time based on route  */}
                    <Switch>
                        {/* add a route for each component AND the component itself nested*/}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        {/* all other routes go to a 404 page - must be at bottom*/}
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
