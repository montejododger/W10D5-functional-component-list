import PokeMoveCard from "./PokeMoveCard.jsx";
import { moves } from "./data";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => {
          // <li key={item.id}>
          //   {item.id}. {item.move}
          // </li>
          // console.log(item);

          return <PokeMoveCard key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default PokeMoves;
