import { Topbar } from "./components/Topbar";
import { Sidebar } from "./components/Sidebar";
import styled from "styled-components"
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { UserList } from "./pages/UserList";
import { User } from "./pages/User";
import { NewUser } from "./pages/NewUser";
import { ProductList } from "./pages/ProductList";
import Product from "./pages/Product";
import { NewProduct } from "./pages/NewProduct";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
