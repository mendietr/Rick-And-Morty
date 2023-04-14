import { Link } from 'react-router-dom';
import style from './card.module.css';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>

         <div className={style.front} >
            <img src={image} alt={name} />
         </div>


         <div className={style.back} >
            <div>
               <Link to={`/detail/${id}`} className={style.link}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
            </div>

            <div className={style.species} >
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

            <div className={style.btn}>
               <button onClick={() => onClose(id)}>X</button>
            </div>
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);