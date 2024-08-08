import { useState } from "react"
import TableauClasse from "../components/classeTableau"
import NavControl from "../components/NavigationControl"
import { FaPlusCircle } from "react-icons/fa"
import ClasseForm from "../components/ClasseForm"
import ClasseUpdateForm from "../components/classeUpdateForm"
import axiosInstance from "../Util/axiosInstance"
import { FaRecycle } from "react-icons/fa6"
import { IoMdRefresh } from "react-icons/io"

const ClasseTabPage = () => {
    const [ajouter, setAjouter] = useState(false)
    const [modifier, setModifier] = useState(false)
    const [data, setData] = useState([]);

    const refreshData =async ()=>{
        try{
            const res = await axiosInstance.get('/classe');
            setData(res.data)
            console.log(data)
        }
        catch(error){
            console.error("Erreur lors du fetch de data: ", error)
        }
    }

    const [upElem, setUpElem] = useState({
        numclasse: '',
        niveau: '',
        parcours: ''
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
        <TableauClasse setUpdate={handleUpdate} refresh={refreshData} data={data}/>
        <ClasseForm afficher={ajouter} setAfficher={setAjouter} refresh={refreshData}/>
        <ClasseUpdateForm afficher={modifier} setAfficher={setModifier} elem={upElem} refresh={refreshData}/>
    </div>
}

export default ClasseTabPage