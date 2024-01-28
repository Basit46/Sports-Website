import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto h-screen flex border-t border-t-[#313131]">
      <Navbar />

      <main className="flex-1">
        <Header />
        <Home />
      </main>
    </div>
  );
};

export default App;
