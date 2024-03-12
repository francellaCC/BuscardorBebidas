import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas"

function Formulario() {
  const { categorias } = useCategorias();
  const {consultarBebidas} = useBebidas()

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setError("Todos los campos son necesarios");
      return;
    }

    setError('')
    consultarBebidas(busqueda)
  };
  return (
    <Form onSubmit={handleSubmit}>

      {error && <Alert variant="danger" className="text-center ">{error}</Alert>}
      <Row>
        <Col md={6} className="p-6">
          <Form.Group>
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
              value={busqueda.nombre}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={(e) =>
                setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
              }
            >
              <option> ---Selecciona una Categoria--- </option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end ">
        <Col md={3}>
          <Button type="submit" variant="warning" className="text-uppercase w-100 mt-3 ">
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Formulario;
