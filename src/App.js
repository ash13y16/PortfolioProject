import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import "./components/styles.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let pageToRender;
  switch (currentPage) {
    case 'about':
      pageToRender = <AboutPage />;
      break;
    case 'projects':
      pageToRender = <ProjectsPage />;
      break;
    default:
      pageToRender = <HomePage />;
  }

  return (
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        {pageToRender}
        <Footer/>
      </div>
  );
}

export default App;
