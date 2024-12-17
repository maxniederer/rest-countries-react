import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import SearchPage from "./components/SearchPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main id="main-root">
        <SearchPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
