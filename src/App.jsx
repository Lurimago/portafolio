import { HashRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen, NavBar } from "./components";
import "./styles/ring.css";
import "./index.css";
import { useSelector } from "react-redux";
import Ring from "./components/Ring";
import AboutMe from "./components/AboutMe";
import Skills_FrontEnd from "./components/Skills_FrontEnd";
import ComponentTest from "./components/ComponentTest";
import Home from "./components/Home";


function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
      
    <HashRouter>
      <NavBar />
      <Home />
      {isLoading && <LoadingScreen />}
      <AboutMe />
      <Skills_FrontEnd />
      <ComponentTest />
    </HashRouter>
  );
}

export default App;
