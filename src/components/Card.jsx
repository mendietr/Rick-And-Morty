import { Link } from 'react-router-dom';

export default function Card({id, name, gender, onClose, species, image }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h3 className="card-name">{name}</h3>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
