import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ArticleDetails from "./pages/ArticleDetails";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MatchDetails from "./pages/MatchDetails";
import FullStandings from "./pages/FullStandings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex border-t border-t-[#313131] bg-[#212227] text-white font-Inter">
      <Navbar />

      <main className="w-full xl:w-auto xl:flex-1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches/:matchId" element={<MatchDetails />} />
          <Route
            path="/articles/:articleId/:articleTitle"
            element={<ArticleDetails />}
          />
          <Route path="/standings" element={<FullStandings />} />
        </Routes>
        <Footer />
      </main>

      <ToastContainer />
    </div>
  );
};

export default App;
