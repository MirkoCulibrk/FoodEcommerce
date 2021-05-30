import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/UI/Layout/Layout";
import {BrowserRouter} from 'react-router-dom';
import "./main.scss";
import Router from "./router/Router";
function App() {
  return (
    // layout is navigation and footer 
      <Layout>
        <Router></Router>
      </Layout>
  );
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
