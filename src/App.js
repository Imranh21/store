import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import ContextProvider from "./context/ProductContext";
import Navbar from '../src/components/Navbar'
import Router from './components/Router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
         <Navbar />
         <Router />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
