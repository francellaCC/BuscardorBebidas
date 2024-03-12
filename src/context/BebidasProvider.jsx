import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidasId] = useState(null);
  const [receta, setReceta] = useState({});

  const [textButton, setTextButton] = useState("Agregar a favoritos");
  const [cargando, setCragando] = useState(false);

  useEffect(() => {
    const obtenerReceta = async () => {
      setCragando(true);
      if (!bebidaId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;

        const { data } = await axios(url);

        setReceta(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setCragando(false);
      }
    };

    obtenerReceta();
  }, [bebidaId]);

  const consultarBebidas = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      const { data } = await axios(url);

      setBebidas(data.drinks);
    } catch (error) {}
  };

  const handleModalClick = () => {
    setModal(!modal);
    setTextButton("Agregar a favoritos");
  };

  const handleBebidaId = (id) => {
    setBebidasId(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        modal,
        handleModalClick,
        handleBebidaId,
        receta,
        cargando,
        setModal,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
