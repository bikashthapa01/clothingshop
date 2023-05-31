import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import NavigationBar from "./routes/navigation/NavigationBar";
import { Shop } from "./routes/shop/Shop";
import { Register } from "./routes/register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
  );
};
export default App;
