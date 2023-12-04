import React from "react";


function Navbar() {

    return (

        <ul class="nav shadow p-3 mb-5 bg-body-tertiary rounded">
            <li class="nav-item">
                <a class="nav-link active fs-4" aria-current="page" href="#"><h5>Zapatos</h5></a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-4" href="#"><h5>Carteras</h5></a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-4" href="#"><h5>Ofertas</h5></a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-5 " href="#"><h5>Contacto</h5></a>
            </li>
            
        </ul>
    )
        
        
}

export default Navbar;