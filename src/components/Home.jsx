import { Container } from "react-bootstrap";
import ModalBebida from "./ModalBebida";
import Formulario from "./Formulario";
import ListadosBebidas from "./ListadosBebidas";
import { Link} from "wouter";

function Home() {
  return (
    <>
      <Container className="mt-5 ">
        <div className="d-flex justify-content-end  align-items-center">
          <Link className="btn btn-info fw-bold btn-sm" href="/bebidasFavoritas">
            Bebidas Favoritas
          </Link>
        </div>

        <Formulario />
        <ListadosBebidas />

        <ModalBebida />
      </Container>
    </>
  );
}

export default Home;
