import { useEffect, useState } from 'react';
import '../styles/Cours_form.css';
import React from 'react';
import axiosInstance from '../Util/axiosInstance';

const CoursForm =({afficher, setAfficher}) =>  
{

    const[classe , setClasse]= useState("");
    const[matiere , setMatiere]= useState("");
    const[date , setDate]=  useState(Date.now)
    const[heure_debut , setHeureDebut] = useState();
    const[heure_fin , setHeureFin] = useState();
    const[enseignant , setEnseignant]= useState("");
    const[salle , setSalle] = useState("");

    useEffect(()=>{
        setAfficher(afficher)
    }, [afficher, setAfficher])

    const handleSubmit =async () =>{
        const data = {
            codematiere: matiere,
            numenseignant: enseignant,
            numclasse: classe,
            numsalle: salle,
            date: date,
            heuredebut: heure_debut,
            heurefin: heure_fin
        }
        try{
            const res = await axiosInstance.post('/cours', data)
            console.log(res.data)
        }
        catch(error){
            console.error("Erreur lors de l'ajout de data d ans cours", error)
        }


    }

    return(afficher)?(
        <div className='popup'>
            <div className="container-form">
                <div className="form">
                    <div className="lign-form">
                        <div className="item-form">
                            <label htmlFor="Classe">Classe</label>
                            <input type="text" id="Classe" name="Classe" value={classe} onChange={(e)=> setClasse(e.target.value)}/>
                        </div>
                    </div>
                    <div className="lign-form">  
                        <div className="item-form">
                            <label htmlFor="matiere">Matiere</label>
                            <input type="text" id="matiere" name="matiere" value={matiere} onChange={(e)=> setMatiere(e.target.value)}/>
                        </div>
                        <div className="item-form">
                            <label htmlFor="Date">Date</label>
                            <input type="date" name="Date" value={date} onChange={(e)=> setDate(e.target.value)}/>
                        </div> 
                        </div>  
                        <div className="lign-form">   
                        <div className="item-form">
                            <label htmlFor="H Debut">H Debut</label>
                            <input type="time" step={5400} name="H Debut" value={heure_debut} onChange={(e)=> setHeureDebut(e.target.value)}/>
                        </div>
                        <div className="item-form">
                            <label htmlFor="Hfin">H Fin</label>
                            <input type="time" step={5400} name="H fin" value={heure_fin} onChange={(e)=> setHeureFin(e.target.value)}/>
                        </div>
                    </div>  
                    <div className="lign-form">
                        <div className="item-form">
                            <label htmlFor="Enseignant">Enseignant</label>
                            <input type="number" name="Enseignant" value={enseignant} onChange={(e)=> setEnseignant(e.target.value)}/>
                        </div>
                        
                        <div className="item-form">
                            <label htmlFor="Salle">Salle</label>
                            <input type="number" name="Salle" value={salle} onChange={(e)=> setSalle(e.target.value)}/>
                        </div>
                    </div>      
                </div> 
                <div className="btn">
                    <div>
                            <p>Enregistrer un cours pour une date</p>
                        </div>
                    <div>
                            <button type="submit" className='bleu-btn' onClick={handleSubmit}>Enregistrer</button>
                    </div> 
                    <div>
                        <button className='annule-btn'onClick={() => setAfficher(false)}>Annuler</button>
                        </div> 
                </div>                    
            </div>
        </div>
    ):"";
}

 export default CoursForm;   