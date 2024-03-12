import React from "react";
import { Link } from "wouter";
import { Container, Row } from "react-bootstrap";
import Bebidas from "./Bebidas";
import ModalBebida from "./ModalBebida";
import { useBebidasFavoritas } from "../hooks/useBebidasFavoritas";

function BebidasFavoritas() {
  const { bebidaFavorita } = useBebidasFavoritas();
  return (
    <>
      <Container>
        <div className="mt-5">
          <div className="d-flex justify-align-content-start  align-items-center">
            <Link className="btn btn-info fw-bold btn-sm  " href="/">
              Volver
            </Link>
          </div>
          <h2 className="mt-3 text-center ">Listado de bebidas favoritas</h2>
          <Row className="mt-5">
            {bebidaFavorita.map((bebida) => (
              <Bebidas key={bebida.idDrink} bebida={bebida} />
            ))}
          </Row>

          <ModalBebida />
        </div>
      </Container>
    </>
  );
}

export default BebidasFavoritas;
