/*--Modulos/Dependencias--*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


/*--Componentes--*/
import NavBar from './components/navbar/Navbar.js'
import CategoriesBar from './components/categories/Categories';
import Footer from './components/footer/Footer';
import ItemContainer from './components/item/ItemContainer.jsx';
import NotFound404 from './components/notFound404/NotFound404.jsx';
import AboutUs from './components/aboutUs/AboutUs.jsx';

/*--Web Vitals--*/
import reportWebVitals from './reportWebVitals';

/*--logica--*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <CategoriesBar />
      <Routes>
        <Route exact path="/" element={<ItemContainer />} />
        <Route path="/categories/:idCategory" element={<ItemContainer />} />
        <Route path="/products/:idProduct" element={<ItemContainer />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

