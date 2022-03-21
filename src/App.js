import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/adduser" exact element={<AddEditUser />} />
        <Route path="/edituser/:id" exact element={<AddEditUser />} />
        <Route path="/userinfo/:id" exact element={<UserInfo />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
