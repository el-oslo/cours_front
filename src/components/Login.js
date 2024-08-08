
import { useState } from 'react';
import './Login.css';

const Login =() => {
    
    return(
        <div className="container"> 
            <div className='text'>
                 <h2>Log in</h2>
            </div>            
            <div className='form'>
                <div className="item-form">
                    <label htmlFor="nom">Nom Utilisateur</label>
                    <input type="text" id="nom" name="nom"></input>
                </div>
                <div className="item-form">
                    <label htmlFor="mdp">MOn de pass</label>
                    <input type="password" id="mdp" name="mdp"></input>
                </div>
                <div className="item">
                    <button type="submit" id='submit'>Valider</button>
                    <button id='button'>Annuler</button>
                </div> 
            </div>   
        </div>        
    );
}

export default Login;