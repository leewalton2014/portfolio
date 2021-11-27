import React from "react";
//global style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import ScrollTop from "./components/ScrollTop";

function App() {
    //code
    return (
        <div className="App">
            <GlobalStyle />
            <ScrollTop />
            <Nav />
            <Home />
        </div>
    );
}

export default App;
