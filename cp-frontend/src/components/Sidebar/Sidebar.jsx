import React from 'react';
import './Sidebar.css';

function Sidebar(){

    return(
        <div className="sidebar">
            <h2>Inicio</h2>
            <ul>
                <li>Bandeja de entrada</li>
                <li>Mis proyectos</li>
                <li>Opción 3</li>
            </ul>
        </div>
    );
}

export default Sidebar;