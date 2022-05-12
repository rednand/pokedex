import { CardContainer, PokemonInfo, PokemonImage } from "./styles";
import pokeImg from "../../assets/poke_color _cinza.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function Card({ url, name, types, pokemonImage }) {
  const [poke, setPoke] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url).then((response) => {
        return response.data.sprites.front_default;
      });
      return response;
    };
    setPoke(getData());
  }, []);

  console.log("get", poke);

  return (
    <CardContainer>
      <h2>{name}</h2>
      <div>
        <PokemonInfo>
          <div>{types}</div>
          <div>{types}</div>
        </PokemonInfo>
        <PokemonImage>
          <img src={pokeImg} />
          <img className="pokemon-image" src={poke} />
        </PokemonImage>
      </div>
    </CardContainer>
  );
}
