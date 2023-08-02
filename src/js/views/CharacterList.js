import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacter from "../component/Characters/CardCharacter"
import "../styles/home.css"

const CharacterList = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className='d-flex overflow-auto custom-scrollbar'>
          {store.characters.map((character) => (
            <div className="col" style={{ flex: '0 0 33.33%' }} key={character.id}>
              <CardCharacter character={character} /></div>
          ))}
        </div>
      )
}

export default CharacterList













