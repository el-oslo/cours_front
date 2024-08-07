import { NavLink } from "react-router-dom";
import "../styles/Nav.css"

const NavControl = ()=>{
    return <>
        <div className="nav-container">
            <ul className="nav-liste">
                <NavLink to={'cours'} className="nav-items">Cours</NavLink>
                <NavLink to={'matiere'} className="nav-items">Matieres</NavLink>
                <NavLink to={'salle'} className="nav-items">Salles</NavLink>
                <NavLink to={'classe'} className="nav-items">Classes</NavLink>
                <NavLink to={'enseignant'} className="nav-items">Enseignants</NavLink>
            </ul>
        </div>
    </>
}

export default NavControl;