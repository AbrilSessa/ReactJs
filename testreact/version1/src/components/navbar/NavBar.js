/*#############################################
                Importaciones
###############################################*/

//Modulos
//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import SearchItems from '../searchItems/SearchItems';
import { LinkContainer } from 'react-router-bootstrap';

//Componentes
//Core
// ------------ LOGIC -------------
function NavBar(props) {
    const cantidadCarrito = 1; // hardcoded 

/*#############################################
###############################################
const NavBar = () => {


    return (

        <header className='header'>
            <a href="#a" className="logo">Tienda</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="#a">Productos</a></li>
                <li><a href="#a">Categorias</a></li>
                <li><a href="#a">Nosotros</a></li>
                <li><a href="#a"><CardWidget cantidad="10" /></a></li>
            </ul>
        </header>

    )

}/*Funcion constructora

/*#############################################
                Exportacion
###############################################*/
export default NavBar