import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { AddMenu, Home, Menus, UpdateMenu } from "./views";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/update-menu/:id" element={<UpdateMenu />} />
        <Route path="/add-menu" element={<AddMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
