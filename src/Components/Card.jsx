import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, image } = props;

  return (
    <>
      <div>
        <li>
          <Link to={`/character/${id}`}>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{id}</p>
          </Link>
        </li>
      </div>
    </>
  );
};

export default Card;
