import { useState } from "react"
import TableauMatiere from "../components/matiereTableau"
import NavControl from "../components/NavigationControl"
import { FaPlusCircle } from "react-icons/fa"
import MatiereForm from "../components/MatiereForm"
import MatiereUpdateForm from "../components/MatiereUpdateForm"
import axiosInstance from "../Util/axiosInstance"
import { FaRecycle } from "react-icons/fa6"
import { IoMdRefresh } from "react-icons/io"

const MatiereTabpage = ()=>{
    const [ajouter, setAjouter] = useState(false)
    const [modifier, setModifier] = useState(false)
    const [data, setData] = useState([]);

    const refreshData =async ()=>{
        try{
            const res = await axiosInstance.get('/matiere');
            setData(res.data)
            console.log(data)
        }
        catch(error){
            console.error("Erreur lors du fetch de data: ", error)
        }
    }

    const [upElem, setUpElem] = useState({
        codematiere: '',
        nommatiere: ''
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
        <TableauMatiere setUpdate={handleUpdate} refresh={refreshData} data={data}/>
        <MatiereForm afficher={ajouter} setAfficher={setAjouter} refresh={refreshData}/>
        <MatiereUpdateForm afficher={modifier} setAfficher={setModifier} elem={upElem} refresh={refreshData}/>
    </div>
}

export default MatiereTabpage