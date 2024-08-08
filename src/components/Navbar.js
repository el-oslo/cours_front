import { useState } from "react";

const Navbar = () =>{

    return(
        <nav className="navbar ">
            <div className="h">
                <h1> e-Cours</h1>
            </div>
            <div className="links">
                <a href="/"> Home</a>
                <a href="/"> About </a>
                <a href="/"> ?</a>
                <button>Login</button>
            </div>
        </nav>
    );
} 

export default Navbar; 