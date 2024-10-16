import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import "./App.css";
import Dashboard from "./pages/Dashboard";
import SpecialCollectionForm from "./pages/SpecialCollectionForm";
import PaymentForm from "./pages/PaymentForm";

const Home: React.FC = () => {
  return <div className="bg-red-700 text-white p-4">Hello</div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashb" element={<Dashboard />} />
        <Route path="/collectionform" element={<SpecialCollectionForm/>}/>
        <Route path="/paymentform" element={<PaymentForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
