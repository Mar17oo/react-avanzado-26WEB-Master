import { useState, useEffect } from "react";
import canciones from '../assets/listaCanciones.json'
//Se utiliza el hook de estado para poder manipular los estados que se van a utiliz

import React from "react";

const SongList = () =>{
    //Se crean dos estados, uno para la lista completa y otro para mostrar
const [list, setlist] = useState([])
const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() =>{
            
        }, 2000)
    
    }, [third])
    
    return (
        <div className="row-container">
            <div>
                <h4>

                </h4>
                <p>

                </p>
            </div>
        </div>
    )
}

export default SongList