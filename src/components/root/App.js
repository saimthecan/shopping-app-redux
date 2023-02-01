import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/product" exact element={<Dashboard />}></Route>
        <Route path="/cart" exact element={<CartDetail />}></Route>
      </Routes>
      
    </Container>
  );
}

export default App;
