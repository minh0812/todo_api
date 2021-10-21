import About from "./components/About";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContextProvider>
          <Navbar />
          <Switch>
            <Route path="/about"component={About}/>
            <Route path="/"component={Home}/>
          </Switch>
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
