import { useState } from "react"
import TableauEnseignant from "../components/enseignantTableau"
import NavControl from "../components/NavigationControl"
import EnseignantForm from "../components/EnseignantForm"
import { FaPlusCircle } from "react-icons/fa"
import EnseignantUpdateForm from "../components/EnseignantUpdateForm"
import axiosInstance from "../Util/axiosInstance"
import { FaRecycle } from "react-icons/fa6"
import { IoMdRefresh } from "react-icons/io"

const EnseignantTabPage = ()=>{
    const [ajouter, setAjouter] = useState(false)
    const [modifier, setModifier] = useState(false)
    const [data, setData] = useState([]);

    const refreshData =async ()=>{
        try{
            const res = await axiosInstance.get('/enseignant');
            setData(res.data)
            console.log(data)
        }
        catch(error){
            console.error("Erreur lors du fetch de data: ", error)
        }
    }

    const [upElem, setUpElem] = useState({
        nomenseignant: '',
        prenomenseignant: '',
        civiliteenseignant: ''
    })


    const handleUpdate = (elem)=>{
        setUpElem(elem)
        setModifier(true)
    }
    return <div>
        <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
            <IoMdRefresh className="refresh-btn" onClick={refreshData}/>
        </div>
        <TableauEnseignant setUpdate={handleUpdate} refresh={refreshData} data={data}/>
        <EnseignantForm afficher={ajouter} setAfficher={setAjouter} refresh={refreshData}/>
        <EnseignantUpdateForm afficher={modifier} setAfficher={setModifier} elem={upElem} refresh={refreshData}/>
    </div>
}

export default EnseignantTabPage