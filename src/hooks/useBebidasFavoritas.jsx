import { useEffect, useState } from "react";
import useBebidas from "./useBebidas";

export const useBebidasFavoritas = () => {
  const [bebidaFavorita, setBebidaFavorita] = useState( ()=>{
    const dinkFromStorage = window.localStorage.getItem('bebidas');
    return JSON.parse(dinkFromStorage) ?? []
  });
  const [textButton, setTextButton] = useState("Agregar a favoritos");

  const {setModal} = useBebidas()
  
  useEffect(() => {
    localStorage.setItem("bebidas", JSON.stringify(bebidaFavorita));
  }, [bebidaFavorita]);


  const agregarFavoritas = (bebida) => {
    setTextButton("Agregar a favoritos");
    const bebidaAgregada = bebidaFavorita.find(
      (bebidaF) => bebidaF.idDrink == bebida.idDrink
    );

    if (!bebidaAgregada) {
      setBebidaFavorita([...bebidaFavorita, bebida]);

      let timerInterval;
      Swal.fire({
        title: "Agregada a favoritos",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
        confirmButtonText: false,
        timerProgressBar: true,
        // didOpen: () => {
        //   Swal.showLoading();
        //   const timer = Swal.getPopup().querySelector("b");
        //   timerInterval = setInterval(() => {
        //     timer.textContent = `${Swal.getTimerLeft()}`;
        //   }, 100);
        // },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        // if (result.dismiss === Swal.DismissReason.timer) {
        //   console.log("I was closed by the timer");
        // }
      });
      setTextButton("Quitar de favoritos");
    } else {
      const bebidasNueva = bebidaFavorita.filter(
        (bebidaF) => bebidaF.idDrink !== bebida.idDrink
      );
      console.log(bebidasNueva);

      setBebidaFavorita(bebidasNueva);
      let timerInterval;
      Swal.fire({
        title: "Eliminada de favoritos",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
        confirmButtonText: false,
        timerProgressBar: true,
        // didOpen: () => {
        //   Swal.showLoading();
        //   const timer = Swal.getPopup().querySelector("b");
        //   timerInterval = setInterval(() => {
        //     timer.textContent = `${Swal.getTimerLeft()}`;
        //   }, 100);
        // },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        // if (result.dismiss === Swal.DismissReason.timer) {
        //   console.log("I was closed by the timer");
        // }
      });
      setTextButton("Agregar a favoritos");
      setModal(false);
    }
  };

  return { textButton, agregarFavoritas,bebidaFavorita };
};
