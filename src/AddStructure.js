import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import "./css/AddCmpt.css";
import add from "./images/Add.svg";
import nom from "./images/User_alt.svg";

const AddStructure = () => {
    const [responsables, setResponsables] = useState([]);
    const [nomStructure, setNomStructure] = useState("");
    const [idResponsable, setIdResponsable] = useState("");

    useEffect(() => {
        fetch('http://localhost:3001/responsables')
            .then(response => response.json())
            .then(data => {
                setResponsables(data);
            })
            .catch(error => console.error('Erreur lors de la récupération des responsables:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Envoyer les données vers le backend
        fetch('http://localhost:3001/structures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                libelle: nomStructure,
                responsable_id: idResponsable
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse du serveur:', data);
            // Réinitialiser les champs après la soumission réussie
            setNomStructure("");
            setIdResponsable("");
            alert('Structure créée avec succès.')
        })
        .catch(error => console.error('Erreur lors de l\'envoi des données:', error));
    };

    return ( 
        <div className="pg">
            <SideBar />
            <form onSubmit={handleSubmit}>
                <span style={{marginLeft: "150px"}} >ajouter une structure</span>
                <div className="flx2" style={{flexDirection: "column"}}>
                    <div className="nom">
                        <img src={add} alt="" />
                        <input 
                            type="text" 
                            placeholder="le nom de structure"
                            value={nomStructure}
                            onChange={e => setNomStructure(e.target.value)}
                        />
                    </div>
                    <div className="respn">
                        <img src={nom} alt="" />
                        <select
                            value={idResponsable}
                            onChange={e => setIdResponsable(e.target.value)}
                        >
                            <option value="" disabled>Sélectionner un responsable</option>
                            {responsables.map(responsable => (
                                <option key={responsable.id} value={responsable.id}>
                                    {responsable.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button style={{marginLeft: "150px"}} type="submit">confirmer</button>
            </form>
        </div>
    );
}

export default AddStructure;
