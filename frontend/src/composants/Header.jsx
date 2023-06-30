import { NavLink } from "react-router-dom";

function Header() {

    return(
        
        <nav className='header'>
          <h1>Mara LeChat & Co</h1>
          <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/boutique">Boutique</NavLink></li>
            <li><NavLink to="/stopmotion">StopMotion</NavLink></li>
          </ul>
        </nav>
    )
}
export default Header