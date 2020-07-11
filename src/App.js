import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importando componentes
import MiComponente from './components/MiComponente';


//Función de ejemplo
function HolaMundo (nombre, edad){
  var presentacion = (
      <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
      </div>
    );

  return presentacion;
}


function App() {
  var nombre = "Diego Alonso";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className = "componentes"> <MiComponente /> </section>
        <section className = "componentes"> <MiComponente /> </section>
        <section className = "componentes"> <MiComponente /> </section>
        <p>
          Hola! Bienvenido al curso de React!
        </p>

        {HolaMundo(nombre, 22)}

        {/* //Cargando componentes */}
        </header>
    </div>
  );
}

export default App;
