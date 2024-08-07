import React, { useEffect, useState } from "react"
import NavControl from "../components/NavigationControl"
import TableauCours from "../components/coursTableau"
import { FaPlusCircle } from "react-icons/fa"
import Cours_form from "../components/Cours_form"



const CoursTabPage = ()=>{
    const [ajouter, setAjouter] = useState(false)



    return<div>
        <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
        </div>
        <TableauCours />
        <Cours_form afficher={ajouter} setAfficher={setAjouter}/>
    </div>
}

export default CoursTabPage