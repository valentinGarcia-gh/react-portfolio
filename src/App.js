import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { HashRouter as Router, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Footer />
            </Router>
        </div>
    );
}

export default App;