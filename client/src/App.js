import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="py-28">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/ticker/:tickerName">
                        <div>Hi</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
