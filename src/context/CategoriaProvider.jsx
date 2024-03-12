import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CategoriaContext = createContext();

const CategoriaProvider = ({ children }) => {

  const [categorias, setCategorias] = useState([])
  const obtenerCategorias = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

    const { data } = await axios(url);

    setCategorias(data.drinks);
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);
  return (
    <CategoriaContext.Provider value={{categorias}}>{children}</CategoriaContext.Provider>
  );
};

export { CategoriaProvider };

export default CategoriaContext;
