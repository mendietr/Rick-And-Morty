import { Link } from 'react-router-dom';
import style from './card.module.css';

export default function Card({id, name, gender, onClose, species, image }) {
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
         <img src={image} alt={name} />
         <h1 className="card-name">{name}</h1>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}
