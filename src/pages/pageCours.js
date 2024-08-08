import React, { useEffect, useState } from "react"
import NavControl from "../components/NavigationControl"
import TableauCours from "../components/coursTableau"
import { FaPlusCircle } from "react-icons/fa"
import CoursForm from "../components/Cours_form"
import { FaPlus, FaRecycle } from "react-icons/fa6"
import CoursUpdateForm from "../components/coursUpdateForm"
import WeekSelector from "../components/weekInput"
import axiosInstance from "../Util/axiosInstance"
import { IoMdRefresh } from "react-icons/io"



const CoursTabPage = ()=>{
    const [ajouter, setAjouter] = useState(false)
    const [modifier, setModifier] = useState(false)
    const [saveData, setSaveData] = useState([])
    const [data, setData] = useState([])

    const refreshData =async ()=>{
        try{
            const res = await axiosInstance.get('/cours');
            setData(res.data)
            setSaveData(res.data)
            console.log(data)
        }
        catch(error){
            console.error("Erreur lors du fetch de data: ", error)
        }
    }

    const [upElem, setUpElem] = useState({
        codematiere: '',
        numenseignant: '',
        numclasse: '',
        numsalle: '',
        date: '',
        heuredebut: '',
        heurefin: ''
    })

    const handleDateChange = (list) => {
        console.log("Liste des dates: ",list)
        let sortedData = saveData.filter(elem => list.includes(elem.date))
        setData(sortedData)
    }

    const goBack = ()=>{
        setData(saveData)
    }

    const handleUpdate = (elem)=>{
        setUpElem(elem)
        setModifier(true)
    }

    return<div>
        <div className="page-control">
            <button className="add-btn" onClick={()=>{setAjouter(true)}}>
                <span>Ajouter</span>
                <FaPlusCircle/> 
            </button>
            <WeekSelector setDates={handleDateChange}/>
            <IoMdRefresh className="refresh-btn" onClick={refreshData}/>
        </div>
        <TableauCours setUpdate={handleUpdate} refresh={refreshData} data={data}/>
        <CoursForm afficher={ajouter} setAfficher={setAjouter} refresh={refreshData}/>
        <CoursUpdateForm afficher={modifier} setAfficher={setModifier} elem={upElem} refresh={refreshData}/>
    </div>
}

export default CoursTabPage