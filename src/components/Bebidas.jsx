import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

function Bebidas({ bebida }) {
  const { handleModalClick, handleBebidaId } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Text>{bebida.strDrink}</Card.Text>

          <Button
            onClick={() => {
              handleModalClick();
              handleBebidaId(bebida.idDrink);
            }}
            variant="warning"
            className="w-100 text-uppercase  mt-2 "
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Bebidas;
      