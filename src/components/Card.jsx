export default function Card({id, name, gender, onClose, species, image }) {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
