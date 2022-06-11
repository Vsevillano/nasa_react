import React from 'react'
import { Link } from 'react-router-dom';

export const ToolBar = (props) => {
    const { hitos, titulo } = props;

    return (
        <>
        <h1 className="display-3 mb-3 animated slideInDown">{titulo}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
                {hitos.map((hito, i) => (

                    <li key={i} className={`breadcrumb-item ${hitos.length !== i + 1 ? (`text-dark active`) : ''}` }  aria-current="page">
                        {hitos.length !== i + 1 ? (
                            <Link to={hito.enlace} className="text-body">{hito.titulo}</Link>
                        ) : 
                        (
                            hito.titulo
                        )}
                                                
                    </li>

                ))}
                {/* <li className="breadcrumb-item"><a className="" href="/">Inicio</a></li>
                <li className="breadcrumb-item text-dark active" aria-current="page">Iniciar sesión</li> */}
            </ol>
        </nav>
        </>   
    )
}
