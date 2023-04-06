   import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '42513035bf40.e58e3dd7120d289e8e46'
// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };


function App() {
      const [characters, setCharacters] = useState([]);

      const onSearch = (id) => {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
      

      // const onSearch = () => {
      //    setCharacters([...characters, example])
      // }
      // console.log(characters)
const onClose = (id) => {
   const charactersFiltered = characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFiltered)
}

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} 
            onClose={onClose}/> }/>
            <Route path='about' element={<About/>} />
            <Route path='detail/:id' element={<Detail/>} /> 
         </Routes>
           
      </div>
   );
}

export default App;
