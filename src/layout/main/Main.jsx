import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import BizSignup from "../../pages/BizSignup";
import About from "./../../pages/About";
import Logout from "./../../pages/Logout";
import MyCards from "./../../pages/MyCards";
import CreateCard from "./../../pages/CreateCard";
import EditCardConvertor from "./../../pages/Card-Edit/editCardConvertor";
import MyFavoriteCards from "./../../pages/MyFavoriteCards";
import Login from "./../../pages/Login";
import Signup from "./../../pages/Signup";
import HomePage from "./../../pages/Home";
import Error404 from "./../../pages/Error404";
import CardDetailsConvertor from "./../../pages/Card-Details/CardDetailsConvertor";

const Main = ({ user }) => {
  return (
    <main style={{ minHeight: "85vh" }}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/biz-signup" element={<BizSignup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/my-cards" element={<MyCards user={user} />} />
        <Route
          path="/card-details/:id"
          element={<CardDetailsConvertor user={user} />}
        />
        <Route path="/create-card" element={<CreateCard user={user} />} />
        <Route
          path="/edit-card/:id"
          element={<EditCardConvertor user={user} />}
        />
        <Route path="/my-fav-cards" element={<MyFavoriteCards user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
};

Main.propTypes = {
  user: PropTypes.object,
};

export default Main;
