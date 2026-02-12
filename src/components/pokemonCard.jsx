import React from "react";


//Recebe os dados de pokemon via "props"
const PokemonCard = ({ pokemon }) => {
    return (
        <li className={`pokemon ${pokemon.type}`}>
            <span className="number">#{pokemon.number}</span>
            <span className="name">{pokemon.name}</span>

            <div className="detail">
                <ol className="types">
                    {pokemon.types.map((type) => (
                        <li key={type} className={'type ${type}'}>
                            {type}
                        </li>
                    ))}
                </ol>
                <img src={pokemon.photo} alt={pokemon.name} />
            </div>
        </li>
    );
};

export default PokemonCard;