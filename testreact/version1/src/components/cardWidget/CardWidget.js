/*#############################################
                Importaciones
###############################################*/

//Modulos
//Estilos
import "./CartWidget.css"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge, Button, Container, Modal } from "react-bootstrap";

//Componentes
//Core

/*#############################################
                Logica
###############################################
const CardWidget = (props) => {//Funcion constructora


    return(
        
        <div className='cart-box'>
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>{props.cantidad}</p>
        </div>
        
    )

}*/

function CartWidget(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container onClick={handleShow} className="d-flex mb-4">
                <FontAwesomeIcon className="me-1" icon={faCartShopping} />
                <Badge bg="dark">{props.length}</Badge>
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar compra</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <FontAwesomeIcon className="usr-modal--icon" icon={faCartShopping} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


/*#############################################
                Exportacion
###############################################*/
export default CardWidget



