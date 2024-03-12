import React, { useState } from "react";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import { useBebidasFavoritas } from "../hooks/useBebidasFavoritas";

function ModalBebida() {
 
  const { modal, handleModalClick, receta, cargando} =useBebidas();
  const {agregarFavoritas, textButton } = useBebidasFavoritas()

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for (let index = 1; index < 16; index++) {
      if (receta[`strIngredient${index}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${index}`]} {receta[`strMeasure${index}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };

  const handleClick =()=>{

  }

  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          src={receta.strDrinkThumb}
          alt={`Imagen receta ${receta.strDrink}`}
        />

        <Modal.Header>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Modal.Title>{receta.strDrink}</Modal.Title>
              </Col>
              <Col xs={6} md={4}>
                <Button
                  className="mt-1  ms-5 "
                  onClick={() => agregarFavoritas(receta)}
                  variant="info"
                  size="sm"
                >
                  {textButton}
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones: </h2>
            {receta.strInstructions}
            <h2>Ingredientes y Cantidades: </h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
}

export default ModalBebida;
