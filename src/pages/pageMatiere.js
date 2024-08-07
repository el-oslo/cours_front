import MatiereForm from "../components/MatiereForm"
import TableauMatiere from "../components/matiereTableau"
import NavControl from "../components/NavigationControl"
import { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const MatiereTabpage = ()=>{

    const [ajouter, setAjouter] = useState(false)

    return <div>
         <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
        </div>    
        <TableauMatiere/>
        <MatiereForm afficher={ajouter} setAfficher={setAjouter}/>
    </div>
}

export default MatiereTabpage