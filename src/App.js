import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import icon from "./assets/user_icon.png"

function App() {
  const url = "https://jsonplaceholder.typicode.com/users"

  /*useState para controlar el cambio de estado de los datos a obtener*/
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(url) /*fetch de la url*/
    .then(response => response.json()) /*respuesta convertida a json*/
    .then((json)=>setUsersData(json)) /*actualiza el useState*/
    .catch((error)=>console.log("Ha ocurrido un error", error)); /*muestra error*/
  }, []); /*lista de dependencias vacía, así indicamos que se carga una vez*/

  return (
    <div className="App">
      <h1>Lista de Usuarios</h1>
      <div className="main__container">
        {usersData.map(userData => (/*map para mapear los usuarios en este caso son 10*/
          <div key={userData.id} className="card__container">
            <div>
              <img src={icon} alt="icon image" />
            </div>
            <p> <a>Nombre:</a> {userData.name} </p>
            <p> <a>Email:</a> {userData.email} </p>
            <p> <a>Tel:</a> {userData.phone} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
