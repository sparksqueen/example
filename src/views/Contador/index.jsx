import { useEffect, useState } from "react";

const Contador = ({ contador, setContador }) => {
  const [contador2, setContador2] = useState(0);
  // let contador = 0
  useEffect(() => {
    console.log("Se montó");
    return console.log("Se desmontó");
  }, []);

  useEffect(() => console.log("Hola"));

  useEffect(
    () => console.log(`Clickeaste ${contador} veces`),
    [contador, contador2]
  );

  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Click</button>
      <button onClick={() => setContador2(contador2 + 1)}>Click2</button>
      <p>Clickeaste {contador} veces</p>
    </>
  );
};

export default Contador;
