import { useContext } from "react"
import CategoriaContext from "../context/CategoriaProvider"


const useCategorias = () =>{
  return useContext(CategoriaContext)
}

export default useCategorias