import {ReactComponent as Logo} from "./assets/jetplane-logo.svg";
import {ReactComponent as Plane} from "./assets/plane.svg"
import {ReactComponent as Search} from "./assets/search.svg";
import {ReactComponent as Roundtrip} from "./assets/roundtrip.svg";
import {ReactComponent as Arrival} from "./assets/arrival.svg";
import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const gradientRef = useRef(null);

  useEffect(() => {
    let degree = 360;
    const interval = setInterval(() => {
      if (degree === 0) degree = 360;
      degree -= 0.5; // TODO ESTO PROBABLEMENTE CON THEATREJS O SE VE MEJOR GSAP EN TERMINOS DE PERFORMANCE Y THEATRE ES MEDIO DOLRO DE HUEVOS PONERLO.
      if (gradientRef.current) {
      gradientRef.current.style.backgroundImage = `linear-gradient(black, black),
                linear-gradient(${degree}deg, #00fff2 ,#2F82FF , black, black)`;
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header>
          <Logo/>
          <h1>Celeste Air</h1>
      </header>
      <main>
        <h2>Encuentra y vuela hacia tu próxima aventura</h2>
        <section className="buttons-section">
          <button ref={gradientRef}>Buscar vuelo</button>
          <a href="/">Vuelos populares</a>
        </section>
        <section className="preview-section">
          <h5>Vista previa</h5>
          <div className="img-container">
            <img src="./src/assets/southisland-mobile.jpg"></img>
            <div className="img-title">
              <p>South Island, NZ</p>
            </div>
          </div>
          <div className="img-container">
            <img src="./src/assets/california-mobile.jpg"></img>
            <div className="img-title">
              <p>San Francisco, USA</p>
            </div>
          </div>
        </section>
      </main>
      <footer>Descubre nuevos horizontes</footer>
    </>
  )
}

export default App
