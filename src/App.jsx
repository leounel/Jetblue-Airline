import {ReactComponent as Logo} from "./assets/jetplane-logo.svg";
import "./App.css";

function App() {

  return (
    <>
      <header>
        <div className="header__logo">
          <Logo/>
          <h1>Jetblue</h1>
        </div>
        <ul>
          <li><a href="/">Mis vuelos</a></li>
          <li><a href="/">Vuelos populares</a></li>
        </ul>
      </header>
      <main>
        <form className="booking__form">
          
        </form>
      </main>
    </>
  )
}

export default App
