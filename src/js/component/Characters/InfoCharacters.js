import React from 'react'
import { useContext } from "react";
import { Context } from "../../store/appContext"
import { Link, useParams } from 'react-router-dom';

const InfoCharacters = () => {
    const params = useParams();
    const characterIndex = params.idCard;
    const {store, actions} = useContext(Context)
    return (
        <div>
            <p className='text-white'>
                Hola, mi id es: {store.characters.length == 0 ? "Cargando..." : store.characters[characterIndex-1].id} y mi nombre es {store.characters[characterIndex-1].name}
            </p>
           <img src={`https://starwars-visualguide.com/assets/img/characters/${characterIndex}.jpg`} />
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    TEMPORAL LINK TO HOME
                </span>
            </Link>
        </div>
    )
}

export default InfoCharacters