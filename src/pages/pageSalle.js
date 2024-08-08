import { useState } from "react"
import NavControl from "../components/NavigationControl"
import TableauSalle from "../components/salleTableau"
import { FaPlusCircle } from "react-icons/fa"
import SalleForm from "../components/SalleForm"
import SalleUpdateForm from "../components/SalleUpdateForm"
import axiosInstance from "../Util/axiosInstance"
import { FaRecycle } from "react-icons/fa6"
import { IoMdRefresh } from "react-icons/io"

const SalleTabPage = ()=>{
    const [ajouter, setAjouter] = useState(false)
    const [modifier, setModifier] = useState(false)
    const [data, setData] = useState([]);

    const [upElem, setUpElem] = useState({
        nomenseignant: '',
        prenomenseignant: '',
        civiliteenseignant: ''
    })

    const refreshData =async ()=>{
        try{
            const res = await axiosInstance.get('/salle');
            setData(res.data)
            console.log(data)
        }
        catch(error){
            console.error("Erreur lors du fetch de data: ", error)
        }
    }


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
        <TableauSalle setUpdate={handleUpdate} refresh={refreshData} data={data}/>
        <SalleForm afficher={ajouter} setAfficher={setAjouter} refresh={refreshData}/>
        <SalleUpdateForm afficher={modifier} setAfficher={setModifier} elem={upElem} refresh={refreshData}/>
    </div>
}

export default SalleTabPage