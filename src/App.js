import Home from "./pages/Home";
import Header from "./layout/header/Header.jsx";
import Footer from "./layout/footer/footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./services/userService";
import Main from "./layout/main/Main";

function App() {
  const user = getCurrentUser();
  return (
    <div className="App">
      <Header user={user} />
      <ToastContainer />
      <Main user={user} />
      <Footer />
    </div>
  );
}

export default App;
