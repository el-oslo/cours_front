const Classe_form = () =>{

    return(
        <div className="container-form">
            <div className="form">
                <div className="lign-form">
                        <div className="item-form">
                            <label htmlFor="num-class">Classe</label>
                            <input type="text" id="num-classe" name="Classe" value={'classe'}/>
                        </div>
                    </div>
                    <div className="lign-form">  
                        <div className="item-form">
                            <label htmlFor="niveau">Niveau</label>
                            <input type="text" id="niveau" name="matiere" value={'matiere'}/>
                        </div>
                        <div className="item-form">
                            <label htmlFor="parcours">Parcours</label>
                            <input type="text" name="parcours" value={''}/>
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
                        <button className='annule-btn'>Annuler</button>
                     </div> 
                </div>                     
        </div>
    );

}

export default Classe_form;