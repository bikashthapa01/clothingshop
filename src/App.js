import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import NavigationBar from "./routes/navigation/NavigationBar";
import { Shop } from "./routes/shop/Shop";
import { Register } from "./routes/register/Register";
import { Login } from "./routes/login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  );
};
export default App;
