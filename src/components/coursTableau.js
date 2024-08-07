import React, { useEffect, useState } from "react"
import axiosInstance from "../Util/axiosInstance"
import '../styles/Tableau.css'
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6"

const TableauCours = ()=>{
    const [data, setData] = useState([]);

    const refreshData =async ()=>{
        try{
            const res = await axiosInstance.get('/cours');
            setData(res.data)
            console.log(data)
        }
        catch(error){
            console.error("Erreur lors du fetch de data: ", error)
        }
    }

    useEffect(()=>{
        refreshData()
    }, [])

    const handleEdit = (elem)=>{
        console.log('Edit')
    }

    const handleDelete = (id) => {
        console.log('Delete')
    }

    return <>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th className="table-head-content">ID</th>
                        <th className="table-head-content">Date</th>
                        <th className="table-head-content">Debut</th>
                        <th className="table-head-content">Fin</th>
                        <th className="table-head-content">Enseignant</th>
                        <th className="table-head-content">Matiere</th>
                        <th className="table-head-content">Salle</th>
                        <th className="table-head-content">Classe</th>
                        <th className="table-head-content">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-content">
                    {
                        data.map((elem, index)=>(
                            <tr key={index} className="table-row">
                                <th>{elem.numcours}</th>
                                <td>{elem.date}</td>
                                <td>{elem.heuredebut}</td>
                                <td>{elem.heurefin}</td>
                                <td>{elem.numenseignant}</td>
                                <td>{elem.codematiere}</td>
                                <td>{elem.numsalle}</td>
                                <td>{elem.numclasse}</td>
                                <td className="action-cell">
                                    <button className="edit-btn" onClick={() =>{handleEdit(elem)}}>
                                        <FaRegPenToSquare/>
                                        <span>
                                            Modifier
                                        </span>
                                    </button>
                                    <FaTrash className="delete-btn" onClick={()=>{handleDelete(elem.numcours)}}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default TableauCours