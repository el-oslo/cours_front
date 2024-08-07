import { useState } from "react";

const ClasseForm = ({afficher, setAfficher}) =>{

    const[classe , setClasse] = useState("");
    const[niveau , setNiveau] = useState("");
    const[parcours , setParcours] = useState("")

    return(afficher)?(
        <div  className="popup">
            <div className="container-form">
                <div className="form">
                    <div className="lign-form">
                            <div className="item-form">
                                <label htmlFor="num-class">Classe</label>
                                <input type="text" id="num-classe" name="Classe" value={classe}  onChange={(e)=> setClasse(e.target.value)}/>
                            </div>
                        </div>
                        <div className="lign-form">  
                            <div className="item-form">
                                <label htmlFor="niveau">Niveau</label>
                                <input type="text" id="niveau" name="matiere" value={niveau}  onChange={(e)=> setNiveau(e.target.value)}/>
                            </div>
                            <div className="item-form">
                                <label htmlFor="parcours">Parcours</label>
                                <input type="text" name="parcours" value={parcours}  onChange={(e)=> setParcours(e.target.value)}/>
                            </div> 
                    </div>
                </div>
                <div className="btn">
                        <div>
                            <p>Enregistrer une Classe </p>
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

export default ClasseForm;