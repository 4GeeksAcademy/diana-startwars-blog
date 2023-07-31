import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacters from "../component/Characters/CardCharacter";

const CharacterList = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className='d-flex overflow-auto'>
          {store.characters.map((character) => (
            <div className="col" style={{ flex: '0 0 33.33%' }} key={character.id}>
              <CardCharacters character={character} /></div>
          ))}
        </div>
      )
}

export default CharacterList