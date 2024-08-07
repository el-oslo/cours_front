import React, { useEffect, useState } from "react"
import axiosInstance from "../Util/axiosInstance"
import '../styles/Tableau.css'
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6"

const TableauEnseignant = ()=>{
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
                        <th className="table-head-content">Numero</th>
                        <th className="table-head-content">Nom</th>
                        <th className="table-head-content">Prénom</th>
                        <th className="table-head-content">Civilité</th>
                        <th className="table-head-content">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-content">
                    {
                        data.map((elem, index)=>(
                            <tr key={index} className="table-row">
                                <th>{elem.numenseignant}</th>
                                <td>{elem.nomenseignant}</td>
                                <td>{elem.prenomenseignant}</td>
                                <td>{elem.civiliteenseignant}</td>
                                <td className="action-cell">
                                    <button className="edit-btn" onClick={() =>{handleEdit(elem)}}>
                                        <FaRegPenToSquare/>
                                        <span>
                                            Modifier
                                        </span>
                                    </button>
                                    <FaTrash className="delete-btn" onClick={()=>{handleDelete(elem.numclasse)}}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default TableauEnseignant