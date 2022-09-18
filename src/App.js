import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Search } from "./pages/Search";
import { Top } from "./pages/Top";
import { Watch } from "./pages/Watch";
import { StoreProvider } from "./store";
import "normalize.css";

export const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Top />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/watch" element={<Watch />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};
