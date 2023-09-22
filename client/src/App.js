import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import IndividualStock from "./pages/IndividualStock";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto px-96 py-28 font-lato">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/ticker/:tickerName">
                        <IndividualStock />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
