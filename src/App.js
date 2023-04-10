import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';

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
      const location = useLocation(); 
      const navigate = useNavigate();
      const [characters, setCharacters] = useState([]);
      const [access, setAccess] = useState(false);
      
      const username = "mendietr1978@icloud.com";
      const password = "123abc";

      const login = (userData) => {
         if(userData.password === password && userData.username === username) {
         setAccess(true);
         navigate("/home");
         }
      }

      // function login(userData) {
      //    if(userData.password === password && userData.username === username) {
      //    setAccess(true);
      //    navigate("/home");
      //    }
      // }

useEffect(() => {
   !access && navigate('/')
}, [navigate])

      const onSearch = (id) => {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         })
      }
      

      // const onSearch = () => {
      //    setCharacters([...characters, example])
      // }
      // console.log(characters)
const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== id))

   // const charactersFiltered = characters.filter(character => character.id !== Number(id))
   // setCharacters(charactersFiltered)
}

   return (
      <div className='App'>
         
         {location.pathname === '/' ? <Form login={login}/> : 
         <Nav onSearch={onSearch}/>}
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
