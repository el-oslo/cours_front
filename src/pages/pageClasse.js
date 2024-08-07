import TableauClasse from "../components/classeTableau"
import NavControl from "../components/NavigationControl"
import { FaPlusCircle } from "react-icons/fa"
import { useState } from "react"
import ClasseForm from "../components/ClasseForm"

const ClasseTabPage = () => {

    const [ajouter, setAjouter] = useState(false)

    return <div>
         <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
        </div>    
        <TableauClasse/>
        <ClasseForm afficher={ajouter} setAfficher={setAjouter}/>
    </div>
}

export default ClasseTabPage