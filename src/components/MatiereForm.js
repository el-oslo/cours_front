import { useState } from "react";

const MatiereForm = ({afficher, setAfficher}) =>{

    const[codeMatiere , setCodeMatiere] = useState("");
    const[nomMatiere , setNomMatiere] = useState("");

    return(afficher)?(
     <div  className="popup">
        <div className="container-form">
            <div className="form">
             <div className="lign-form">
                    <div className="item-form">
                        <label htmlFor="num-class">Code Matiere</label>
                        <input type="text" id="num-classe" name="Classe" value={codeMatiere}  onChange={(e)=> setCodeMatiere(e.target.value)}/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="niveau">Nom Matiere</label>
                        <input type="text" id="niveau" name="matiere" value={nomMatiere}  onChange={(e)=> setNomMatiere(e.target.value)}/>
                    </div>
             </div> 
             </div>
             <div className="btn">
                <div>
                     <p>Enregistrer une Matiere </p>
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

export default MatiereForm;