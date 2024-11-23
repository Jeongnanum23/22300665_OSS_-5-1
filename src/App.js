import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
