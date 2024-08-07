const Salle_form= ()=>{

    return(
        <div className="container-form">
        <div className="form">
         <div className="lign-form">
                <div className="item-form">
                    <label htmlFor="num-class">Num Salle</label>
                    <input type="text" id="num-classe" name="Classe" value={''}/>
                </div>
                <div className="item-form">
                    <label htmlFor="niveau">Nom Salle</label>
                    <input type="text" id="niveau" name="matiere" value={''}/>
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
                <button className='annule-btn'>Annuler</button>
             </div> 
        </div>                
    </div>

    );
}

export default Salle_form;