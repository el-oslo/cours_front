import { useState } from "react";

const EnseignantForm = ({afficher, setAfficher})=>{

    const [nom , setNom] =  useState("");
    const[ prenom , setPrenom] = useState("");
    const[civiliter , setCiviliter] = useState("");

    return(afficher)?(
    <div  className="popup">
        <div className="container-form">
            <div className="form">
                <div className="lign-form">
                        <div className="item-form">
                            <label htmlFor="num-class">Nom</label>
                            <input type="text" id="num-classe" name="Classe" value={nom}  onChange={(e)=> setNom(e.target.value)}/>
                        </div>
                    </div>
                    <div className="lign-form">  
                        <div className="item-form">
                            <label htmlFor="niveau">Prenom</label>
                            <input type="text" id="niveau" name="matiere" value={prenom}  onChange={(e)=> setPrenom(e.target.value)}/>
                        </div>
                        <div className="item-form">
                            <label htmlFor="parcours">Civiliter</label>
                            <input type="text" name="parcours" value={civiliter}  onChange={(e)=> setCiviliter(e.target.value)}/>
                        </div> 
                    </div>
                 </div>
                <div className="btn">
                    <div>
                        <p>Enregistrer un Enseignant </p>
                    </div>
                    <div>
                        <button type="submit" className='bleu-btn' onClick={'handleSubmit'}>Enregistrer</button>
                    </div> 
                    <div>
                        <button className='annule-btn' onClick={() => setAfficher(false)}>Annuler</button>
                    </div> 
             </div>                     
         </div>
    </div>
    ):"";
}

export default EnseignantForm;