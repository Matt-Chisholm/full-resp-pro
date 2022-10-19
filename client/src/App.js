import "./App.css";
import PortfolioContainer from "./PortfolioContainer/Home/PortfolioContainer";
import ScrollButton from "./utilities/ScrollButton/ScrollButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <PortfolioContainer />
      <ScrollButton />
    </div>
  );
}

export default App;
