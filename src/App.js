import React from "react";
import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Clinic from "./pages/clinic/clinic";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Client from "./pages/client/client";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Main/>}></Route>
          <Route exact path={"/clinic"} element={<Clinic/>}></Route>
          <Route exact path={"/client"} element={<Client/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
