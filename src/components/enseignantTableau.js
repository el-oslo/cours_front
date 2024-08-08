import React, { useEffect, useState } from "react"
import axiosInstance from "../Util/axiosInstance"
import '../styles/Tableau.css'
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6"

const TableauEnseignant = ({setUpdate, refresh, data})=>{

    useEffect(()=>{
        refresh()
    }, [])

    const handleEdit = (elem)=>{
        setUpdate(elem)
    }

    const handleDelete =async (id) => {
        try{
            const res = await axiosInstance.delete('/enseignant/'+id)
            console.log('enseignant deleted id: ', id)
            refresh()
        }
        catch(error){
            console.error("delete failed", error)
        }
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
                            <tr key={index} className="table-row non-selectable">
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