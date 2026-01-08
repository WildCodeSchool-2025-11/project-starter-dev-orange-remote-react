import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./views/home/Home";
import About from "./views/about/About";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />
      <main>
        {page === "about" ? (
          <About />
        ) : page === "contact" ? (
          <Home />
        ) : page === "services" ? (
          <Home />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
