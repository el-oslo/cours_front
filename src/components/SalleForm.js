import { useState } from "react";

const SalleForm= ({afficher, setAfficher})=>{

    const[numSalle , setNumSalle] = useState("");
    const[nomSalle , setNomSalle] = useState("");

    return(afficher)?(
     <div  className="popup">
        <div className="container-form">
            <div className="form">
            <div className="lign-form">
                    <div className="item-form">
                        <label htmlFor="num-class">Num Salle</label>
                        <input type="text" id="num-classe" name="Classe" value={numSalle}  onChange={(e)=> setNumSalle(e.target.value)}/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="niveau">Nom Salle</label>
                        <input type="text" id="niveau" name="matiere" value={nomSalle}  onChange={(e)=> setNomSalle(e.target.value)}/>
                    </div>
            </div> 
            </div>
            <div className="btn">
                <div>
                    <p>Enregistrer une Salle </p>
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

export default SalleForm;