import TableauEnseignant from "../components/enseignantTableau"
import NavControl from "../components/NavigationControl"
import { FaPlusCircle } from "react-icons/fa"
import { useState } from "react"

const EnseignantTabPage = ()=>{

    const [ajouter, setAjouter] = useState(false)
    return  <div>
         <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
        </div>
        <TableauEnseignant/>
    </div>
}

export default EnseignantTabPage