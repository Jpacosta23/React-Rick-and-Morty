import React, { useEffect, useState } from "react";
import Card from "./Card";
import Paginator from "./Paginator";

const CardList = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    try {
      const RES = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await RES.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <>
      <h1>hola</h1>
      {console.log(info.pages)}
      <ul>
        {characters.map((character) => (
          <Card key={character.id} {...character} />
        ))}
      </ul>
      <Paginator setPage={setPage} info={info} />
    </>
  );
};

export default CardList;
