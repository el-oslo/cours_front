import React, { useEffect, useState } from "react"
import axiosInstance from "../Util/axiosInstance"
import '../styles/Tableau.css'
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6"

const TableauSalle = ({setUpdate, refresh, data})=>{

    useEffect(()=>{
        refresh()
    }, [])

    const handleEdit = (elem)=>{
        setUpdate(elem)
    }

    const handleDelete =async (id) => {
        try{
            const res = await axiosInstance.delete('/salle/'+id)
            console.log("salle deleted id:", id)
            refresh()
        } catch(error){
            console.error("delete salle failed", error)
        }
    }

    return <>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th className="table-head-content">numSalle</th>
                        <th className="table-head-content">Designation</th>
                        <th className="table-head-content">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-content">
                    {
                        data.map((elem, index)=>(
                            <tr key={index} className="table-row non-selectable">
                                <th>{elem.numsalle}</th>
                                <td>{elem.designsalle}</td>
                                <td className="action-cell">
                                    <button className="edit-btn" onClick={() =>{handleEdit(elem)}}>
                                        <FaRegPenToSquare/>
                                        <span>
                                            Modifier
                                        </span>
                                    </button>
                                    <FaTrash className="delete-btn" onClick={()=>{handleDelete(elem.numsalle)}}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default TableauSalle