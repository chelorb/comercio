import React from "react";
import Zapato1 from "../Imagenes/Zapato1.jpg";
import Zapato2 from "../Imagenes/Zapato2.jpg";
import Zapato3 from "../Imagenes/Zapato3.jpg";
import carrusel from "./carrusel.css";
import LogoBottiello from "../Imagenes/LogoBottiello.png";

function Carrusel(){

    return(
      <div>
        <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner anchoImagen">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={Zapato1} class="d-block w-100 anchoImagen" alt="..."></img>
          </div>
          <div class={"carousel-item"} data-bs-interval="2000">
            <img src={Zapato2} class="d-block w-100 anchoImagen" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={Zapato3} class="d-block w-100 anchoImagen" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div>
      <div className="imagenContenedor">
        <img src={LogoBottiello} alt="Bottiello Calzados" className="logoBottiello" />
      </div>
      </div>
      </div>
      

);
}

export default Carrusel;