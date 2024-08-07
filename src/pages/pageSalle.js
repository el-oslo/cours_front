import NavControl from "../components/NavigationControl"
import TableauSalle from "../components/salleTableau"
import { FaPlusCircle } from "react-icons/fa"
import { useState } from "react"
import SalleForm from "../components/SalleForm"

const SalleTabPage = ()=>{

    const [ajouter, setAjouter] = useState(false)

    return <div>
         <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
        </div>    
        <TableauSalle/>
        <SalleForm afficher={ajouter} setAfficher={setAjouter}/>
    </div>
}

export default SalleTabPage