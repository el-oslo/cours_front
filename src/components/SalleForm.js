import { useState } from "react";
import axiosInstance from "../Util/axiosInstance";

const SalleForm= ({afficher, setAfficher, refresh})=>{

    const[numSalle , setNumSalle] = useState(0);
    const[nomSalle , setNomSalle] = useState("");

    const handleSubmit = async () =>{
        const data = {
            numsalle: numSalle,
            designsalle: nomSalle
        }
        try{
            const res = await axiosInstance.post('/salle', data)
            console.log(res.data)
            refresh()
            setAfficher(false)
        }
        catch(error){
            console.error("Post salle data to api dailed", error)
        }
    }

    return(afficher)?(
     <div  className="popup">
        <div className="container-form">
            <div className="form">
            <div className="lign-form">
                    <div className="item-form">
                        <label htmlFor="num-class">Num Salle</label>
                        <input type="number" id="num-classe" name="Classe" value={numSalle}  onChange={(e)=> setNumSalle(e.target.value)} required/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="niveau">Designation Salle</label>
                        <input type="text" id="niveau" name="matiere" value={nomSalle}  onChange={(e)=> setNomSalle(e.target.value)}/>
                    </div>
            </div> 
            </div>
            <div className="btn">
                <div>
                    <p>Enregistrer une Salle </p>
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

export default SalleForm;