import React, { useEffect, useState } from "react"
import axiosInstance from "../Util/axiosInstance"
import '../styles/Tableau.css'
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6"

const TableauClasse = ({setUpdate, refresh, data})=>{
    useEffect(()=>{
        refresh()
    }, [])

    const handleEdit = (elem)=>{
        setUpdate(elem)
    }

    const handleDelete =async (id) => {
        try{
            const res  = await axiosInstance.delete('/classe/'+id)
            refresh()
            console.log('Deleted')
        }
        catch (error){
            console.error("Delete ClasseError", error)
        }
    }

    return <>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th className="table-head-content">Classe</th>
                        <th className="table-head-content">Niveau</th>
                        <th className="table-head-content">Parcours</th>
                        <th className="table-head-content">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-content">
                    {
                        data.map((elem, index)=>(
                            <tr key={index} className="table-row non-selectable">
                                <th>{elem.numclasse}</th>
                                <td>{elem.niveau}</td>
                                <td>{elem.parcours}</td>
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

export default TableauClasse