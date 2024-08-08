import React, { useEffect, useState } from "react"
import axiosInstance from "../Util/axiosInstance"
import '../styles/Tableau.css'
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6"

const TableauMatiere = ({setUpdate, refresh, data})=>{

    useEffect(()=>{
        refresh()
    }, [])

    const handleEdit = (elem)=>{
        setUpdate(elem)
    }

    const handleDelete =async (id) => {
        try{
            const res = await axiosInstance.delete('/matiere/'+id)
            console.log("matiere deleted id: ", id)
            refresh()
        }
        catch(error){
            console.error("Delete failed", error)
        }
    }

    return <>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th className="table-head-content">Code Matiere</th>
                        <th className="table-head-content">Nom Matiere</th>
                        <th className="table-head-content">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-content">
                    {
                        data.map((elem, index)=>(
                            <tr key={index} className="table-row non-selectable">
                                <th>{elem.codematiere}</th>
                                <td>{elem.nommatiere}</td>
                                <td className="action-cell">
                                    <button className="edit-btn" onClick={() =>{handleEdit(elem)}}>
                                        <FaRegPenToSquare/>
                                        <span>
                                            Modifier
                                        </span>
                                    </button>
                                    <FaTrash className="delete-btn" onClick={()=>{handleDelete(elem.codematiere)}}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default TableauMatiere