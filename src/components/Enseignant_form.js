const Enseignant_form = (props)=>{
    return(props.trigger)?(
        <div className="container-form">
        <div className="form">
            <div className="lign-form">
                    <div className="item-form">
                        <label htmlFor="num-class">Nom</label>
                        <input type="text" id="num-classe" name="Classe" value={''}/>
                    </div>
                </div>
                <div className="lign-form">  
                    <div className="item-form">
                        <label htmlFor="niveau">Prenom</label>
                        <input type="text" id="niveau" name="matiere" value={''}/>
                    </div>
                    <div className="item-form">
                        <label htmlFor="parcours">Civiliter</label>
                        <input type="text" name="parcours" value={''}/>
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
                    <button className='annule-btn' onClick={() => props.setButtonEnseignant(false)}>Annuler</button>
                 </div> 
            </div>                     
    </div>
    ):"";
}

export default Enseignant_form;