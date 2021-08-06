import React from "react";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
    useEffect(() => { document.title = `Vertechxa Technology` })
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Services" component={Services} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;