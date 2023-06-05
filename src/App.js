import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import NavigationBar from "./routes/navigation/NavigationBar";
import { Authentication} from "./routes/authentication/Authentication";
import { Shop } from "./components/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};
export default App;
