import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import ScrollTop from "./components/ScrollTop";
//router
import { Switch, Route, useLocation } from "react-router-dom";
//animation
import { AnimatePresence } from "framer-motion";

function App() {
    //code
    const location = useLocation();

    return (
        <div className="App">
            <GlobalStyle />
            <ScrollTop />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={AboutUs} />
                    <Route exact path="/work">
                        <OurWork />
                    </Route>
                    <Route exact path="/work/:id">
                        <MovieDetail />
                    </Route>
                    <Route exact path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
