import { useState } from "react";
import axiosInstance from "../Util/axiosInstance";

const EnseignantForm = ({afficher, setAfficher, refresh})=>{

    const [nom , setNom] =  useState("");
    const[ prenom , setPrenom] = useState("");
    const[civiliter , setCiviliter] = useState("");

    const handleSubmit =async () => {
        const data = {
            nomenseignant: nom,
            prenomenseignant: prenom,
            civiliteenseignant: civiliter
        }
        try{
            const res = await axiosInstance.post('/enseignant', data)
            console.log(res.data)
            refresh()
            setAfficher(false)
        }
        catch(error){
            console.error("Post enseignant data failed", error)
        }
    }

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
                            <label htmlFor="parcours">Civilité</label>
                            <input type="text" name="parcours" value={civiliter}  onChange={(e)=> setCiviliter(e.target.value)}/>
                        </div> 
                    </div>
                 </div>
                <div className="btn">
                    <div>
                        <p>Enregistrer un Enseignant </p>
                    </div>
                    <div>
                        <button type="submit" className='bleu-btn' onClick={handleSubmit}>Enregistrer</button>
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